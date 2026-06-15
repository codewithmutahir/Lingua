import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

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
    <View
      style={{
        borderRadius: 24,
        marginBottom: 24,
        overflow: "hidden",
        minHeight: 168,
        experimental_backgroundImage:
          "linear-gradient(135deg, #6C4EF5 0%, #4D8BFF 100%)",
        shadowColor: "#6C4EF5",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 4,
      }}
    >
      <View className="flex-row items-stretch px-5 pt-5 pb-5">
        <View className="flex-1 justify-between pr-2">
          <View>
            <Text className="text-body-sm text-white/80">Continue learning</Text>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 28,
                lineHeight: 34,
                color: "#FFFFFF",
                marginTop: 4,
              }}
            >
              {languageName}
            </Text>
            <Text className="text-body-md text-white/90 mt-1">
              {levelLabel} • Unit {unitOrder}
            </Text>
          </View>

          <Pressable
            onPress={onContinue}
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 999,
              paddingHorizontal: 24,
              paddingVertical: 10,
              marginTop: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
                color: "#6C4EF5",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>

        <Image
          source={images.palace}
          style={{ width: 120, height: 120, alignSelf: "flex-end" }}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
