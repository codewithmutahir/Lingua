import { Text, View } from "react-native";

export default function LearnScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="text-h2 text-text-primary">Learn</Text>
      <Text className="text-body-md text-text-secondary mt-2 text-center">
        Lessons and practice coming soon.
      </Text>
    </View>
  );
}
