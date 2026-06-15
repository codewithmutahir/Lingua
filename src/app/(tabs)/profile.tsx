import { useClerk } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useLanguageStore } from "@/store/language-store";

export default function ProfileScreen() {
  const router = useRouter();
  const { signOut } = useClerk();
  const { clearSelectedLanguage } = useLanguageStore();

  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="text-h2 text-text-primary">Profile</Text>
      <Text className="text-body-md text-text-secondary mt-2 text-center">
        Profile settings coming soon.
      </Text>

      <Pressable
        onPress={() => signOut()}
        className="mt-8 w-full border border-border rounded-lg"
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text className="text-body-md text-text-secondary text-center py-3">
          Sign out
        </Text>
      </Pressable>
      <Pressable
        onPress={async () => {
          await clearSelectedLanguage();
          router.replace("/choose-language");
        }}
        className="mt-3 w-full border border-border rounded-lg"
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text className="text-body-md text-text-secondary text-center py-3">
          Clear language selection (test)
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.9,
  },
});
