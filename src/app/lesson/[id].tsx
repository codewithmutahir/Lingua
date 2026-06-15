import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLanguageById } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { useLessonProgressStore } from "@/store/lesson-progress-store";

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setLessonStatus } = useLessonProgressStore();
  const lesson = id ? getLessonById(id) : undefined;
  const language = lesson ? getLanguageById(lesson.languageId) : undefined;

  if (!lesson || !language) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centered}>
          <Text className="text-h3 text-text-primary">Lesson not found</Text>
          <Pressable onPress={() => router.back()} style={styles.backLink}>
            <Text style={styles.backLinkText}>Go back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const handleStartLesson = () => {
    setLessonStatus(lesson.id, "in_progress");
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text className="text-body-sm text-text-secondary">{language.name}</Text>
        <Text className="text-h2 text-text-primary mt-1">{lesson.title}</Text>
        <Text className="text-body-md text-text-secondary mt-2">
          {lesson.description}
        </Text>
        <Text className="text-body-md text-text-primary mt-4 font-medium">
          Goal
        </Text>
        <Text className="text-body-md text-text-secondary mt-1">
          {lesson.goal.summary}
        </Text>
        <Text className="text-body-sm text-text-secondary mt-4">
          {lesson.estimatedMinutes} min • {lesson.xpReward} XP
        </Text>

        <Pressable
          onPress={handleStartLesson}
          style={({ pressed }) => [styles.startButton, pressed && styles.pressed]}
        >
          <Text style={styles.startButtonText}>Start lesson</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Back to lessons</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  startButton: {
    marginTop: 32,
    backgroundColor: "#6C4EF5",
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
  },
  startButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  secondaryButton: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 8,
  },
  secondaryButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#6C4EF5",
  },
  backLink: {
    marginTop: 16,
    paddingVertical: 8,
  },
  backLinkText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#6C4EF5",
  },
  pressed: {
    opacity: 0.9,
  },
});
