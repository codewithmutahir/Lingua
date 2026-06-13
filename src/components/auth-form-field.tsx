import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, TextInput, View } from "react-native";

type AuthFormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
};

export function AuthFormField({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
  onTogglePassword,
}: AuthFormFieldProps) {
  const isEmail = label.toLowerCase() === "email";

  return (
    <View className="rounded-2xl border border-border bg-white px-4 py-3">
      <Text className="text-caption text-text-secondary">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          className="mt-0.5 flex-1 text-body-lg text-text-primary"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={isEmail ? "email-address" : "default"}
          placeholderTextColor="#6b7280"
        />
        {showPasswordToggle && (
          <Pressable onPress={onTogglePassword} hitSlop={8} className="pl-2">
            <Ionicons
              name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#6b7280"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
