import { useUser } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AudioLessonHeaderProps = {
  streak: number;
  onBack?: () => void;
  showBackButton?: boolean;
};

export function AudioLessonHeader({
  streak,
  onBack,
  showBackButton = true,
}: AudioLessonHeaderProps) {
  const { user } = useUser();
  const avatarUrl = user?.imageUrl;

  return (
    <View style={styles.container}>
      {showBackButton ? (
        <Pressable
          onPress={onBack}
          hitSlop={12}
          style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </Pressable>
      ) : (
        <View style={styles.iconButton} />
      )}

      <View style={styles.titleBlock}>
        <Text style={styles.title}>AI Teacher</Text>
        <View style={styles.statusRow}>
          <View style={styles.onlineDot} />
          <Text style={styles.statusText}>Online</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={({ pressed }) => [styles.circleButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Video preview"
        >
          <Ionicons name="videocam-outline" size={18} color="#0D132B" />
        </Pressable>

        <View style={styles.streakBadge}>
          <Text style={styles.streakText}>{streak}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [styles.avatarButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Profile"
        >
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} style={styles.avatar} contentFit="cover" />
          ) : (
            <Ionicons name="person-outline" size={18} color="#0D132B" />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBlock: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    lineHeight: 24,
    color: "#0D132B",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#21C16B",
    marginRight: 5,
  },
  statusText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
    color: "#6B7280",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  circleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  streakBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  streakText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#0D132B",
  },
  avatarButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  avatar: {
    width: 36,
    height: 36,
  },
  pressed: {
    opacity: 0.75,
  },
});
