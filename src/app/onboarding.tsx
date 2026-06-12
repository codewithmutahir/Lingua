import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { images } from "@/constants/images";

type SpeechBubbleProps = {
  label: string;
  backgroundColor: string;
  textClassName: string;
  rotation: string;
  tailOffset: number;
  style: { top: number; left?: number; right?: number };
};

function SpeechBubble({
  label,
  backgroundColor,
  textClassName,
  rotation,
  tailOffset,
  style,
}: SpeechBubbleProps) {
  return (
    <View
      style={[
        styles.bubbleWrapper,
        { transform: [{ rotate: rotation }] },
        style,
      ]}
    >
      <View style={[styles.bubbleBody, { backgroundColor }]}>
        <Text className={`text-body-sm ${textClassName}`}>{label}</Text>
      </View>
      <View
        style={[
          styles.bubbleTail,
          {
            borderTopColor: backgroundColor,
            marginLeft: tailOffset,
          },
        ]}
      />
    </View>
  );
}

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 px-6 pb-6">
        <View className="items-center pt-2">
          <View className="flex-row items-center gap-2">
            <Image
              source={images.mascotLogo}
              style={{ width: 36, height: 36 }}
              contentFit="contain"
            />
            <Text className="text-h3 text-text-primary lowercase">muolingo</Text>
          </View>
        </View>

        <View className="mt-10">
          <Text className="text-h1 text-text-primary">
            Your AI language{" "}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="text-body-lg text-text-secondary mt-3">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="relative h-[360px] w-full max-w-[340px] items-center justify-center">
            <SpeechBubble
              label="Hello!"
              backgroundColor="#e8f3ff"
              textClassName="text-text-primary"
              rotation="-28deg"
              tailOffset={14}
              style={{ top: -22, left: 10 }}
            />
            <SpeechBubble
              label="¡Hola!"
              backgroundColor="#f0ebff"
              textClassName="text-lingua-purple"
              rotation="12deg"
              tailOffset={18}
              style={{ top: -28, right: 68 }}
            />
            <SpeechBubble
              label="你好!"
              backgroundColor="#ffece8"
              textClassName="text-[#e53935]"
              rotation="26deg"
              tailOffset={10}
              style={{ top: 64, right: 10 }}
            />
            <Image
              source={images.mascotWelcome}
              style={{ width: 420, height: 420 }}
              contentFit="contain"
            />
          </View>
        </View>

        <Pressable className="bg-lingua-purple rounded-2xl h-14 flex-row items-center px-6 active:opacity-90">
          <View className="flex-1" />
          <Text className="text-h4 text-white">Get Started</Text>
          <View className="flex-1 items-end">
            <SymbolView
              name="chevron.right"
              tintColor="#ffffff"
              size={18}
              weight="semibold"
              fallback={
                <Ionicons name="chevron-forward" size={18} color="#ffffff" />
              }
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bubbleWrapper: {
    position: "absolute",
    alignItems: "flex-start",
  },
  bubbleBody: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  bubbleTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 9,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});
