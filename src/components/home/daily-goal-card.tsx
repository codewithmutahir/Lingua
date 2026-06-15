import { Image } from "expo-image";
import { Text, View } from "react-native";

import { images } from "@/constants/images";

type DailyGoalCardProps = {
  earnedXp: number;
  goalXp: number;
};

export function DailyGoalCard({ earnedXp, goalXp }: DailyGoalCardProps) {
  const progress = Math.min(earnedXp / goalXp, 1);

  return (
    <View
      style={{
        backgroundColor: "#FFF6E8",
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#0D132B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View className="flex-1 pr-3">
        <Text className="text-body-sm text-text-secondary">Daily goal</Text>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 28,
            lineHeight: 34,
            color: "#0D132B",
            marginTop: 4,
          }}
        >
          {earnedXp} / {goalXp} XP
        </Text>
        <View
          style={{
            marginTop: 12,
            height: 10,
            borderRadius: 999,
            backgroundColor: "#FFE4C4",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${progress * 100}%`,
              height: "100%",
              borderRadius: 999,
              backgroundColor: "#FF8A00",
            }}
          />
        </View>
      </View>

      <Image
        source={images.treasure}
        style={{ width: 72, height: 72 }}
        contentFit="contain"
      />
    </View>
  );
}
