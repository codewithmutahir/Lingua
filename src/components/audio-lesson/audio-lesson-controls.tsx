import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AudioLessonControlsProps = {
  isMicMuted: boolean;
  areSubtitlesVisible: boolean;
  isCameraPreviewOn: boolean;
  onToggleMic: () => void;
  onToggleSubtitles: () => void;
  onToggleCameraPreview: () => void;
  onEndCall: () => void;
};

type ControlButtonProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  isActive?: boolean;
  variant?: "default" | "danger";
};

function ControlButton({
  label,
  icon,
  onPress,
  isActive = false,
  variant = "default",
}: ControlButtonProps) {
  const isDanger = variant === "danger";

  return (
    <View style={styles.controlItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.controlButton,
          isDanger && styles.endCallButton,
          isActive && !isDanger && styles.activeButton,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel={label}
      >
        <Ionicons
          name={icon}
          size={22}
          color={isDanger ? "#FFFFFF" : isActive ? "#6C4EF5" : "#0D132B"}
        />
      </Pressable>
      <Text style={styles.controlLabel}>{label}</Text>
    </View>
  );
}

export function AudioLessonControls({
  isMicMuted,
  areSubtitlesVisible,
  isCameraPreviewOn,
  onToggleMic,
  onToggleSubtitles,
  onToggleCameraPreview,
  onEndCall,
}: AudioLessonControlsProps) {
  return (
    <View style={styles.container}>
      <ControlButton
        label="Camera"
        icon={isCameraPreviewOn ? "videocam" : "videocam-outline"}
        onPress={onToggleCameraPreview}
        isActive={isCameraPreviewOn}
      />
      <ControlButton
        label="Mic"
        icon={isMicMuted ? "mic-off-outline" : "mic-outline"}
        onPress={onToggleMic}
        isActive={!isMicMuted}
      />
      <ControlButton
        label="Subtitles"
        icon="language-outline"
        onPress={onToggleSubtitles}
        isActive={areSubtitlesVisible}
      />
      <ControlButton
        label="End Call"
        icon="call"
        onPress={onEndCall}
        variant="danger"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  controlItem: {
    alignItems: "center",
    width: 72,
  },
  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  activeButton: {
    borderWidth: 2,
    borderColor: "#6C4EF5",
  },
  endCallButton: {
    backgroundColor: "#FF4D4F",
  },
  controlLabel: {
    marginTop: 6,
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    lineHeight: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.88,
  },
});
