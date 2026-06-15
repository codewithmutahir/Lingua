import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { images } from "@/constants/images";

type ContinueLearningCardProps = {
  languageName: string;
  levelLabel: string;
  unitOrder: number;
  onContinue?: () => void;
};

export function ContinueLearningCard({
  languageName,
  levelLabel,
  unitOrder,
  onContinue,
}: ContinueLearningCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text className="text-body-sm text-white/80">Continue learning</Text>
        <Text style={styles.languageName}>{languageName}</Text>
        <Text className="text-body-md text-white/90 mt-1">
          {levelLabel} • Unit {unitOrder}
        </Text>

        <Pressable
          onPress={onContinue ?? (() => router.push("/(tabs)/learn"))}
          style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      </View>

      <Image
        source={images.palace}
        style={styles.palace}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    marginBottom: 24,
    overflow: "hidden",
    minHeight: 196,
    experimental_backgroundImage:
      "linear-gradient(135deg, #6C4EF5 0%, #4D8BFF 100%)",
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 188,
  },
  languageName: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    lineHeight: 34,
    color: "#FFFFFF",
    marginTop: 4,
  },
  continueButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 16,
  },
  continueText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#6C4EF5",
  },
  pressed: {
    opacity: 0.9,
  },
  palace: {
    position: "absolute",
    right: -4,
    bottom: -38,
    width: 228,
    height: 228,
  },
});
