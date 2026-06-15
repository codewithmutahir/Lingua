import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonsSection } from "@/components/lessons/lessons-section";
import { getLessonsScreenData } from "@/lib/lesson-data";
import { useLanguageStore } from "@/store/language-store";
import { useLessonProgressStore } from "@/store/lesson-progress-store";

export default function LearnScreen() {
  const { selectedLanguageId } = useLanguageStore();
  const { progressByLessonId } = useLessonProgressStore();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const lessonsData = selectedLanguageId
    ? getLessonsScreenData(selectedLanguageId, progressByLessonId)
    : null;

  if (!lessonsData) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-h3 text-text-primary">Learn</Text>
          <Text className="text-body-md text-text-secondary mt-2 text-center">
            Select a language to view lessons.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <LessonsSection
        data={lessonsData}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLessonPress={(lessonId) =>
          router.push({ pathname: "/lesson/[id]", params: { id: lessonId } })
        }
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}
