import { ScrollView, StyleSheet, Text, View } from "react-native";

import { LessonCard } from "@/components/lessons/lesson-card";
import { LessonScreenHeader } from "@/components/lessons/lesson-screen-header";
import { LessonTabSwitcher } from "@/components/lessons/lesson-tab-switcher";
import type { LessonsScreenData } from "@/lib/lesson-data";

type LessonsSectionProps = {
  data: LessonsScreenData;
  activeTab: "lessons" | "practice";
  onTabChange: (tab: "lessons" | "practice") => void;
  onLessonPress: (lessonId: string) => void;
  onBack?: () => void;
};

export function LessonsSection({
  data,
  activeTab,
  onTabChange,
  onLessonPress,
  onBack,
}: LessonsSectionProps) {
  const subtitle = `Unit ${data.unit.order} • ${data.activeLessonOrder} / ${data.lessons.length} lessons`;

  return (
    <View style={styles.container}>
      <LessonScreenHeader
        title={data.unit.title}
        subtitle={subtitle}
        imageKey={data.unit.imageKey}
        onBack={onBack}
      />

      <LessonTabSwitcher activeTab={activeTab} onTabChange={onTabChange} />

      {activeTab === "lessons" ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          {data.lessons.map(({ lesson, status }) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              status={status}
              onPress={() => onLessonPress(lesson.id)}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.practicePlaceholder}>
          <Text className="text-h4 text-text-primary">Practice</Text>
          <Text className="text-body-md text-text-secondary mt-2 text-center">
            Practice exercises for {data.unit.title} are coming soon.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  practicePlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingBottom: 48,
  },
});
