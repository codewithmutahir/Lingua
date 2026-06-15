import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

import { images } from "@/constants/images";
import type { TodayPlanItem } from "@/lib/home-data";

type TodayPlanSectionProps = {
  items: TodayPlanItem[];
};

function PlanIcon({ variant }: { variant: TodayPlanItem["variant"] }) {
  if (variant === "lesson") {
    return (
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          backgroundColor: "#6C4EF5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="book-outline" size={22} color="#FFFFFF" />
      </View>
    );
  }

  if (variant === "ai_conversation") {
    return (
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          backgroundColor: "#6C4EF5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="headset-outline" size={22} color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View
      style={{
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#FF8B7B",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Image
        source={images.mascotWelcome}
        style={{ width: 34, height: 34 }}
        contentFit="contain"
      />
    </View>
  );
}

function StatusIndicator({ completed }: { completed: boolean }) {
  if (completed) {
    return (
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: 14,
          backgroundColor: "#6C4EF5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="checkmark" size={18} color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View
      style={{
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#D1D5DB",
      }}
    />
  );
}

export function TodayPlanSection({ items }: TodayPlanSectionProps) {
  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-h3 text-text-primary">Today&apos;s plan</Text>
        <Pressable hitSlop={8}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 14,
              color: "#6C4EF5",
            }}
          >
            View all
          </Text>
        </Pressable>
      </View>

      <View className="gap-4">
        {items.map((item) => (
          <View key={item.id} className="flex-row items-center">
            <PlanIcon variant={item.variant} />
            <View className="flex-1 ml-3.5">
              <Text className="text-h4 text-text-primary">{item.title}</Text>
              <Text className="text-body-sm text-text-secondary mt-0.5">
                {item.subtitle}
              </Text>
            </View>
            <StatusIndicator completed={item.completed} />
          </View>
        ))}
      </View>
    </View>
  );
}
