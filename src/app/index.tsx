import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { images } from "@/constants/images";

export default function Index() {
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

      <Link href="/onboarding" asChild>
        <Pressable className="mt-10 bg-lingua-purple rounded-2xl px-8 py-4 active:opacity-90">
          <Text className="text-h4 text-white text-center">
            View Onboarding
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
