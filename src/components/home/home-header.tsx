import { useUser } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Text, View } from "react-native";

import { images } from "@/constants/images";

type HomeHeaderProps = {
  greetingWord: string;
  languageFlagUrl: string;
  streak: number;
};

export function HomeHeader({
  greetingWord,
  languageFlagUrl,
  streak,
}: HomeHeaderProps) {
  const { user } = useUser();
  const firstName =
    user?.firstName ?? user?.username?.split("@")[0] ?? "Learner";

  return (
    <View className="flex-row items-center justify-between mb-5">
      <View className="flex-row items-center flex-1 mr-3">
        <Image
          source={{ uri: languageFlagUrl }}
          style={{ width: 44, height: 44, borderRadius: 22 }}
          contentFit="cover"
        />
        <Text className="text-h3 text-text-primary ml-3 flex-shrink">
          {greetingWord}, {firstName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-3">
        <View className="flex-row items-center">
          <Image
            source={images.streakFire}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#FF8A00",
              marginLeft: 4,
            }}
          >
            {streak}
          </Text>
        </View>
        <View className="w-10 h-10 rounded-full bg-surface items-center justify-center">
          <Ionicons name="notifications-outline" size={22} color="#6B7280" />
        </View>
      </View>
    </View>
  );
}
