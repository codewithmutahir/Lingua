import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { getImageSource } from "@/constants/images";
import type { LessonProgressStatus } from "@/store/lesson-progress-store";
import type { Lesson } from "@/types/learning";

type LessonCardProps = {
  lesson: Lesson;
  status: LessonProgressStatus;
  onPress: () => void;
};

export function LessonCard({ lesson, status, onPress }: LessonCardProps) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";
  const isNotStarted = status === "not_started";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isInProgress && styles.inProgressCard,
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${lesson.title} lesson`}
    >
      <View style={styles.content}>
        {isInProgress ? (
          <Text style={styles.lessonLabel}>Lesson {lesson.order}</Text>
        ) : null}

        <Text
          style={[
            styles.title,
            isInProgress && styles.inProgressTitle,
            isNotStarted && styles.lockedTitle,
          ]}
        >
          {lesson.title}
        </Text>

        {isInProgress ? (
          <Text style={styles.inProgressStatus}>In progress</Text>
        ) : null}

        {isNotStarted ? (
          <Text style={styles.lockedSubtitle}>0 / 6 lessons</Text>
        ) : null}
      </View>

      <View style={styles.trailing}>
        {isCompleted ? (
          <View style={styles.completedBadge}>
            <Ionicons name="checkmark" size={18} color="#FFFFFF" />
          </View>
        ) : null}

        {isInProgress ? (
          <Image
            source={getImageSource(lesson.imageKey)}
            style={styles.lessonImage}
            contentFit="cover"
          />
        ) : null}

        {isNotStarted ? (
          <Ionicons name="lock-closed-outline" size={22} color="#D1D5DB" />
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  inProgressCard: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F3F0FF",
  },
  pressed: {
    opacity: 0.92,
  },
  content: {
    flex: 1,
    paddingRight: 12,
  },
  lessonLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#6C4EF5",
    marginBottom: 2,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "#0D132B",
  },
  inProgressTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
  },
  lockedTitle: {
    fontFamily: "Poppins-Medium",
    color: "#374151",
  },
  inProgressStatus: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#6C4EF5",
    marginTop: 4,
  },
  lockedSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 4,
  },
  trailing: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  completedBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#21C16B",
    alignItems: "center",
    justifyContent: "center",
  },
  lessonImage: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
});
