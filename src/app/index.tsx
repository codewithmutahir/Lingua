import { useAuth, useClerk } from "@clerk/expo";
import { Image } from "expo-image";
import { Link, Redirect } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { images } from "@/constants/images";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator size="large" color="#7c3aed" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 justify-center items-center bg-background px-6">
      <Image
        source={images.mascotLogo}
        style={{ height: 64, width: 192 }}
        contentFit="contain"
      />
      <Text className="text-h1 text-center text-lingua-purple mt-4">
        muolingo
      </Text>
      <Text className="text-body-lg text-text-secondary text-center mt-3">
        Welcome back! Your language journey continues here.
      </Text>
      <Link href="/choose-language" asChild>
        <Pressable className="mt-8 w-full bg-lingua-purple rounded-lg active:opacity-90">
          <Text
            className="text-body-lg text-white text-center py-3"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Choose a language
          </Text>
        </Pressable>
      </Link>
      <Pressable
        onPress={() => signOut()}
        className="mt-3 w-full border border-border rounded-lg active:opacity-90"
      >
        <Text className="text-body-md text-text-secondary text-center py-3">
          Sign out
        </Text>
      </Pressable>
    </View>
  );
}
