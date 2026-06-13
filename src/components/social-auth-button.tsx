import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

import { GoogleIcon } from "@/components/google-icon";

type SocialProvider = "google" | "facebook" | "apple";

type SocialAuthButtonProps = {
  provider: SocialProvider;
  onPress?: () => void;
  disabled?: boolean;
};

const providerConfig: Record<
  "facebook" | "apple",
  { label: string; icon: keyof typeof Ionicons.glyphMap; color: string }
> = {
  facebook: {
    label: "Continue with Facebook",
    icon: "logo-facebook",
    color: "#1877F2",
  },
  apple: {
    label: "Continue with Apple",
    icon: "logo-apple",
    color: "#000000",
  },
};

export function SocialAuthButton({
  provider,
  onPress,
  disabled = false,
}: SocialAuthButtonProps) {
  const label =
    provider === "google"
      ? "Continue with Google"
      : providerConfig[provider].label;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-14 flex-row items-center justify-center rounded-2xl border border-border bg-white active:opacity-90 ${disabled ? "opacity-50" : ""}`}
    >
      <View className="absolute left-5">
        {provider === "google" ? (
          <GoogleIcon size={22} />
        ) : (
          <Ionicons
            name={providerConfig[provider].icon}
            size={22}
            color={providerConfig[provider].color}
          />
        )}
      </View>
      <Text className="text-body-md text-text-primary">{label}</Text>
    </Pressable>
  );
}
