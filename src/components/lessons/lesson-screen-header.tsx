import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { getImageSource } from "@/constants/images";

type LessonScreenHeaderProps = {
  title: string;
  subtitle: string;
  imageKey?: string;
  onBack?: () => void;
};

export function LessonScreenHeader({
  title,
  subtitle,
  imageKey = "cafe",
  onBack,
}: LessonScreenHeaderProps) {
  return (
    <View>
      <View style={styles.topBar}>
        <Pressable
          onPress={onBack}
          hitSlop={12}
          style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </Pressable>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <Pressable
          hitSlop={12}
          style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
          accessibilityRole="button"
          accessibilityLabel="Bookmark unit"
        >
          <Ionicons name="ribbon-outline" size={22} color="#FF8A00" />
        </Pressable>
      </View>

      <View style={styles.heroContainer}>
        <Image
          source={getImageSource(imageKey)}
          style={styles.heroImage}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
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
  pressed: {
    opacity: 0.7,
  },
  titleBlock: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    lineHeight: 24,
    color: "#0D132B",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#6B7280",
    marginTop: 2,
    textAlign: "center",
  },
  heroContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: 200,
  },
});
