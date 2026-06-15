import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { images } from "@/constants/images";

type DailyGoalCardProps = {
  earnedXp: number;
  goalXp: number;
};

export function DailyGoalCard({ earnedXp, goalXp }: DailyGoalCardProps) {
  const progress = Math.min(earnedXp / goalXp, 1);

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text className="text-body-sm text-text-secondary">Daily goal</Text>
        <View style={styles.xpRow}>
          <Text style={styles.earnedXp}>{earnedXp}</Text>
          <Text style={styles.goalXp}> / {goalXp} XP</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
      </View>

      <Image
        source={images.treasure}
        style={styles.treasure}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  },
  content: {
    flex: 1,
    marginRight: 16,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 4,
  },
  progressTrack: {
    marginTop: 12,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#FFE4C4",
    overflow: "hidden",
    maxWidth: "100%",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#FF8A00",
  },
  treasure: {
    width: 92,
    height: 92,
    flexShrink: 0,
  },
  earnedXp: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    lineHeight: 34,
    color: "#0D132B",
  },
  goalXp: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    lineHeight: 24,
    color: "#6B7280",
  },
});
