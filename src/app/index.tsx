import { Image } from "expo-image";
import { Text, View } from "react-native";

import { images } from "@/constants/images";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={images.mascotLogo}
        style={{ height: 64, width: 192 }}
        contentFit="contain"
      />
      <Text className="text-h1 text-center text-lingua-purple">
        Lingua
      </Text>
    </View>
  );
}
