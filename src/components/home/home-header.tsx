import { useClerk, useUser } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
  const { signOut } = useClerk();
  const firstName =
    user?.firstName ?? user?.username?.split("@")[0] ?? "Learner";

  return (
    <View className="flex-row items-center justify-between mb-5">
      <View className="flex-row items-center flex-1 mr-3 min-w-0">
        <Image
          source={{ uri: languageFlagUrl }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          contentFit="cover"
        />
        <Text
          numberOfLines={1}
          style={styles.greeting}
        >
          {greetingWord}, {firstName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-2.5">
        <View className="flex-row items-center">
          <Image
            source={images.streakFire}
            style={{ width: 28, height: 28 }}
            contentFit="contain"
          />
          <Text style={styles.streakCount}>{streak}</Text>
        </View>
        <Pressable
          onPress={() => signOut()}
          style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Sign out"
        >
          <Ionicons name="log-out-outline" size={22} color="#6B7280" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    flexShrink: 1,
    marginLeft: 10,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "#0D132B",
  },
  streakCount: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
    color: "#FF8A00",
    marginLeft: 4,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.85,
  },
});
