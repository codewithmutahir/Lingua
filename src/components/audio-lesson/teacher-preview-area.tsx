import { useUser } from "@clerk/expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { getImageSource, images } from "@/constants/images";
import type { Phrase } from "@/types/learning";

type TeacherPreviewAreaProps = {
  languageName: string;
  lessonTitle: string;
  goalSummary: string;
  phrases: Phrase[];
  speechPrimary: string;
  speechSecondary: string;
  teacherKickoff: string;
  areSubtitlesVisible: boolean;
  isCameraPreviewOn: boolean;
  onReplaySpeech: () => void;
  style?: StyleProp<ViewStyle>;
};

export function TeacherPreviewArea({
  languageName,
  lessonTitle,
  goalSummary,
  phrases,
  speechPrimary,
  speechSecondary,
  teacherKickoff,
  areSubtitlesVisible,
  isCameraPreviewOn,
  onReplaySpeech,
  style,
}: TeacherPreviewAreaProps) {
  const { user } = useUser();
  const avatarUrl = user?.imageUrl;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={getImageSource("teacherBackground")}
        style={styles.background}
        contentFit="cover"
        blurRadius={12}
      />
      <View style={styles.overlay} />

      {isCameraPreviewOn ? (
        <View style={styles.userInset}>
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl }}
              style={styles.userInsetImage}
              contentFit="cover"
            />
          ) : (
            <View style={styles.userInsetFallback}>
              <Ionicons name="person" size={28} color="#FFFFFF" />
            </View>
          )}
        </View>
      ) : null}

      <View style={styles.mascotStage}>
        <Image
          source={images.teacherMascot}
          style={styles.mascot}
          contentFit="contain"
        />
      </View>

      {areSubtitlesVisible ? (
        <View style={styles.subtitlesPanel}>
          <Text style={styles.subtitlesEyebrow}>
            {languageName} · {lessonTitle}
          </Text>
          <Text style={styles.subtitlesGoal}>{goalSummary}</Text>
          {phrases.map((phrase) => (
            <View key={phrase.id} style={styles.phraseRow}>
              <Text style={styles.phraseText}>{phrase.text}</Text>
              <Text style={styles.phraseTranslation}>{phrase.translation}</Text>
            </View>
          ))}
          <Text style={styles.teacherContext} numberOfLines={2}>
            {teacherKickoff}
          </Text>
        </View>
      ) : null}

      <View style={styles.speechBubble}>
        <View style={styles.speechContent}>
          <Text style={styles.speechPrimary}>{speechPrimary}</Text>
          <Text style={styles.speechSecondary}>{speechSecondary}</Text>
        </View>
        <Pressable
          onPress={onReplaySpeech}
          hitSlop={8}
          style={({ pressed }) => [styles.speakerButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Replay teacher audio"
        >
          <Ionicons name="volume-high" size={20} color="#6C4EF5" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#D8D0E8",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  userInset: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 68,
    height: 88,
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#6B7280",
    zIndex: 3,
  },
  userInsetImage: {
    width: "100%",
    height: "100%",
  },
  userInsetFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B5563",
  },
  mascotStage: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 72,
    zIndex: 1,
  },
  mascot: {
    width: "88%",
    height: "100%",
  },
  speechBubble: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    zIndex: 2,
  },
  speechContent: {
    flex: 1,
    paddingRight: 8,
  },
  speechPrimary: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 22,
    color: "#0D132B",
  },
  speechSecondary: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#6B7280",
    marginTop: 2,
  },
  speakerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitlesPanel: {
    position: "absolute",
    left: 14,
    right: 14,
    top: 14,
    maxHeight: "42%",
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    zIndex: 4,
  },
  subtitlesEyebrow: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 16,
    color: "#6C4EF5",
    marginBottom: 2,
  },
  subtitlesGoal: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 16,
    color: "#0D132B",
    marginBottom: 6,
  },
  phraseRow: {
    marginBottom: 4,
  },
  phraseText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    lineHeight: 18,
    color: "#0D132B",
  },
  phraseTranslation: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
    color: "#6B7280",
  },
  teacherContext: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    lineHeight: 15,
    color: "#6B7280",
    marginTop: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});
