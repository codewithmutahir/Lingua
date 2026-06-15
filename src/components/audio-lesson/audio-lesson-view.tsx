import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AudioLessonControls } from "@/components/audio-lesson/audio-lesson-controls";
import { AudioLessonHeader } from "@/components/audio-lesson/audio-lesson-header";
import { LessonFeedbackCard } from "@/components/audio-lesson/lesson-feedback-card";
import { TeacherPreviewArea } from "@/components/audio-lesson/teacher-preview-area";
import type { AudioLessonDisplay } from "@/lib/audio-lesson-data";
import { useLessonProgressStore } from "@/store/lesson-progress-store";

const DEFAULT_STREAK = 12;

type AudioLessonViewProps = {
  lessonData: AudioLessonDisplay;
  onBack?: () => void;
  onEndCall?: () => void;
};

export function AudioLessonView({
  lessonData,
  onBack,
  onEndCall,
}: AudioLessonViewProps) {
  const { setLessonStatus } = useLessonProgressStore();
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [areSubtitlesVisible, setAreSubtitlesVisible] = useState(false);
  const [isCameraPreviewOn, setIsCameraPreviewOn] = useState(true);
  const [speechPrimary, setSpeechPrimary] = useState("");
  const [speechSecondary, setSpeechSecondary] = useState("");

  const {
    lesson,
    language,
    phrases,
    teacherKickoff,
    speechPrimary: defaultPrimary,
    speechSecondary: defaultSecondary,
  } = lessonData;

  useEffect(() => {
    setLessonStatus(lesson.id, "in_progress");
    setSpeechPrimary(defaultPrimary);
    setSpeechSecondary(defaultSecondary);
  }, [lesson.id, defaultPrimary, defaultSecondary, setLessonStatus]);

  const handleEndCall = () => {
    setLessonStatus(lesson.id, "in_progress");
    onEndCall?.();
  };

  const handleReplaySpeech = () => {
    setSpeechPrimary(defaultPrimary);
    setSpeechSecondary(defaultSecondary);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <AudioLessonHeader
        streak={DEFAULT_STREAK}
        onBack={onBack}
        showBackButton={Boolean(onBack)}
      />

      <View style={styles.body}>
        <TeacherPreviewArea
          style={styles.preview}
          languageName={language.name}
          lessonTitle={lesson.title}
          goalSummary={lesson.goal.summary}
          phrases={phrases}
          speechPrimary={speechPrimary || defaultPrimary}
          speechSecondary={speechSecondary || defaultSecondary}
          teacherKickoff={teacherKickoff}
          areSubtitlesVisible={areSubtitlesVisible}
          isCameraPreviewOn={isCameraPreviewOn}
          onReplaySpeech={handleReplaySpeech}
        />

        <View style={styles.controlsSection}>
          <AudioLessonControls
            isMicMuted={isMicMuted}
            areSubtitlesVisible={areSubtitlesVisible}
            isCameraPreviewOn={isCameraPreviewOn}
            onToggleMic={() => setIsMicMuted((current) => !current)}
            onToggleSubtitles={() =>
              setAreSubtitlesVisible((current) => !current)
            }
            onToggleCameraPreview={() =>
              setIsCameraPreviewOn((current) => !current)
            }
            onEndCall={handleEndCall}
          />
        </View>

        <LessonFeedbackCard />
      </View>
    </SafeAreaView>
  );
}

export function AudioLessonEmptyState({ message }: { message: string }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.centered}>
        <Text className="text-h3 text-text-primary">AI Teacher</Text>
        <Text className="text-body-md text-text-secondary mt-2 text-center">
          {message}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  preview: {
    flex: 1,
    minHeight: 0,
  },
  controlsSection: {
    paddingTop: 14,
    paddingBottom: 10,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});
