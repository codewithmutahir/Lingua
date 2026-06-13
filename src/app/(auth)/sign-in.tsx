import { useSignIn } from "@clerk/expo";
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

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, fetchStatus } = useSignIn();
  const { signInWithSocial, isAuthenticating } = useSocialAuth();
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null,
  );
  const [isVerifying, setIsVerifying] = useState(false);
  const [needsClientTrust, setNeedsClientTrust] = useState(false);
  const isLoading = fetchStatus === "fetching";

  const finalizeSignIn = useCallback(async () => {
    await signIn.finalize({
      navigate: ({ session, decorateUrl }) => {
        if (session?.currentTask) {
          return;
        }

        setShowVerification(false);
        navigateAfterAuth(router, decorateUrl);
      },
    });
  }, [router, signIn]);

  const handleSignIn = async () => {
    if (!email.trim()) {
      Alert.alert("Email required", "Please enter your email address.");
      return;
    }

    setVerificationError(null);
    setNeedsClientTrust(false);

    try {
      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email.trim(),
      });

      if (error) {
        Alert.alert(
          "Sign in failed",
          error.message ?? "Unable to send verification code.",
        );
        return;
      }

      setShowVerification(true);
    } catch (err) {
      Alert.alert(
        "Sign in failed",
        err instanceof Error
          ? err.message
          : "Unable to send verification code.",
      );
    }
  };

  const handleVerify = useCallback(
    async (code: string) => {
      setIsVerifying(true);
      setVerificationError(null);

      try {
        const { error } = needsClientTrust
          ? await signIn.mfa.verifyEmailCode({ code })
          : await signIn.emailCode.verifyCode({ code });

        if (error) {
          setVerificationError(error.message ?? "Invalid verification code.");
          return false;
        }

        if (signIn.status === "complete") {
          await finalizeSignIn();
          return true;
        }

        if (signIn.status === "needs_client_trust") {
          const { error: mfaError } = await signIn.mfa.sendEmailCode();
          if (mfaError) {
            setVerificationError(
              mfaError.message ?? "Unable to send verification code.",
            );
            return false;
          }

          setNeedsClientTrust(true);
          setVerificationError(null);
          return false;
        }

        setVerificationError(
          "Sign in could not be completed. Please try again.",
        );
        return false;
      } finally {
        setIsVerifying(false);
      }
    },
    [finalizeSignIn, needsClientTrust, signIn],
  );

  const handleCloseVerification = () => {
    setShowVerification(false);
    setVerificationError(null);
    setNeedsClientTrust(false);
    void signIn.reset();
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

          <Text className="text-h1 text-text-primary mt-2">Welcome back</Text>
          <Text className="text-body-lg text-text-secondary mt-2">
            Continue your language journey today ✨
          </Text>

          <View className="items-center mt-4 mb-2">
            <Image
              source={images.mascotAuth}
              style={{ width: 200, height: 200 }}
              contentFit="contain"
            />
          </View>

          <AuthFormField label="Email" value={email} onChangeText={setEmail} />

          <Pressable
            onPress={handleSignIn}
            disabled={isLoading}
            className="bg-lingua-purple rounded-2xl h-14 items-center justify-center mt-6 active:opacity-90"
          >
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-h4 text-white">Sign In</Text>
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
              Don&apos;t have an account?{" "}
            </Text>
            <Link href="/sign-up" asChild>
              <Pressable hitSlop={8}>
                <Text className="text-body-md text-lingua-purple font-poppins-semibold">
                  Sign up
                </Text>
              </Pressable>
            </Link>
          </View>
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
