import { router } from "expo-router";

import {
  AudioLessonEmptyState,
  AudioLessonView,
} from "@/components/audio-lesson/audio-lesson-view";
import { getActiveAudioLessonForLanguage } from "@/lib/audio-lesson-data";
import { useLanguageStore } from "@/store/language-store";
import { useLessonProgressStore } from "@/store/lesson-progress-store";

export default function AiTeacherScreen() {
  const { selectedLanguageId } = useLanguageStore();
  const { progressByLessonId } = useLessonProgressStore();

  if (!selectedLanguageId) {
    return (
      <AudioLessonEmptyState message="Select a language to start an AI Teacher session." />
    );
  }

  const lessonData = getActiveAudioLessonForLanguage(
    selectedLanguageId,
    progressByLessonId,
  );

  if (!lessonData) {
    return (
      <AudioLessonEmptyState message="No lessons available for your selected language yet." />
    );
  }

  return (
    <AudioLessonView
      lessonData={lessonData}
      onEndCall={() => router.push("/(tabs)")}
    />
  );
}
