import { useSignUp } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthFormField } from "@/components/auth-form-field";
import { SocialAuthButton } from "@/components/social-auth-button";
import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { navigateAfterAuth } from "@/lib/auth";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp, fetchStatus } = useSignUp();
  const { signInWithSocial, isAuthenticating } = useSocialAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Missing fields", "Please enter your email and password.");
      return;
    }

    setVerificationError(null);
    setIsLoading(true);

    try {
      const { error } = await signUp.password({
        emailAddress: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Sign up failed", error.message ?? "Unable to create account.");
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        Alert.alert(
          "Verification failed",
          sendError.message ?? "Unable to send verification code.",
        );
        return;
      }

      setShowVerification(true);
    } catch (err) {
      Alert.alert(
        "Sign up failed",
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = useCallback(
    async (code: string) => {
      setIsVerifying(true);
      setVerificationError(null);

      try {
        const { error } = await signUp.verifications.verifyEmailCode({ code });

        if (error) {
          setVerificationError(error.message ?? "Invalid verification code.");
          return false;
        }

        if (signUp.status === "complete") {
          await signUp.finalize({
            navigate: ({ session, decorateUrl }) => {
              if (session?.currentTask) {
                return;
              }

              setShowVerification(false);
              navigateAfterAuth(router, decorateUrl);
            },
          });
          return true;
        }

        setVerificationError(
          "Sign up could not be completed. Please try again.",
        );
        return false;
      } finally {
        setIsVerifying(false);
      }
    },
    [router, signUp],
  );

  const handleCloseVerification = () => {
    setShowVerification(false);
    setVerificationError(null);
    void signUp.reset?.();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            className="h-10 w-10 items-center justify-center"
          >
            <SymbolView
              name="chevron.left"
              tintColor="#0d132b"
              size={22}
              weight="semibold"
              fallback={
                <Ionicons name="chevron-back" size={24} color="#0d132b" />
              }
            />
          </Pressable>

          <Text className="text-h1 text-text-primary mt-2">
            Create your account
          </Text>
          <Text className="text-body-lg text-text-secondary mt-2">
            Start your language journey today ✨
          </Text>

          <View className="items-center mt-4 mb-2">
            <Image
              source={images.mascotAuth}
              style={{ width: 200, height: 200 }}
              contentFit="contain"
            />
          </View>

          <View className="gap-4">
            <AuthFormField
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <AuthFormField
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPassword}
              showPasswordToggle
              onTogglePassword={() => setShowPassword((prev) => !prev)}
            />
          </View>

          <Pressable
            onPress={handleSignUp}
            disabled={isLoading}
            className="bg-lingua-purple rounded-2xl h-14 items-center justify-center mt-6 active:opacity-90"
          >
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-h4 text-white">Sign Up</Text>
            )}
          </Pressable>

          <View className="flex-row items-center gap-3 mt-6">
            <View className="flex-1 h-px bg-border" />
            <Text className="text-body-sm text-text-secondary">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          <View className="gap-3 mt-4">
            <SocialAuthButton
              provider="google"
              disabled={isAuthenticating}
              onPress={() => signInWithSocial("oauth_google")}
            />
            <SocialAuthButton
              provider="facebook"
              disabled={isAuthenticating}
              onPress={() => signInWithSocial("oauth_facebook")}
            />
            <SocialAuthButton
              provider="apple"
              disabled={isAuthenticating}
              onPress={() => signInWithSocial("oauth_apple")}
            />
          </View>

          <View className="flex-row items-center justify-center mt-6 pb-4">
            <Text className="text-body-md text-text-secondary">
              Already have an account?{" "}
            </Text>
            <Link href="/sign-in" asChild>
              <Pressable hitSlop={8}>
                <Text className="text-body-md text-lingua-purple font-poppins-semibold">
                  Log in
                </Text>
              </Pressable>
            </Link>
          </View>

          <View nativeID="clerk-captcha" />
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        onClose={handleCloseVerification}
        email={email}
        onVerify={handleVerify}
        isVerifying={isVerifying}
        error={verificationError}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
});
