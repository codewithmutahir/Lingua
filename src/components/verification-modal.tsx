import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<boolean>;
  isVerifying?: boolean;
  error?: string | null;
};

export function VerificationModal({
  visible,
  onClose,
  email,
  onVerify,
  isVerifying = false,
  error = null,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    if (code.length !== 6 || isVerifying) {
      return;
    }

    void onVerify(code)
      .then((success) => {
        if (success) {
          setCode("");
        }
      })
      .catch(() => {
        // Error handling is delegated to parent via error prop
      });
  }, [code, isVerifying, onVerify]);

  const digits = Array.from({ length: 6 }, (_, index) => code[index] ?? "");

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <Pressable style={styles.overlay} onPress={onClose}>
          <Pressable onPress={(event) => event.stopPropagation()}>
            <View className="rounded-t-3xl bg-white px-6 pb-8 pt-6">
              <Text className="text-h2 text-text-primary text-center">
                Check your email
              </Text>
              <Text className="text-body-md text-text-secondary mt-2 text-center">
                We sent a verification code to{" "}
                <Text className="text-text-primary">{email}</Text>. Enter the
                6-digit code below.
              </Text>

              <Pressable
                onPress={() => inputRef.current?.focus()}
                className="mt-6 flex-row justify-center gap-2.5"
              >
                {digits.map((digit, index) => (
                  <View
                    key={index}
                    className={`h-14 w-11 items-center justify-center rounded-xl border ${
                      digit ? "border-lingua-purple" : "border-border"
                    } bg-white`}
                  >
                    <Text className="text-h3 text-text-primary">{digit}</Text>
                  </View>
                ))}
              </Pressable>

              {error ? (
                <Text className="text-body-sm text-red-500 text-center mt-3">
                  {error}
                </Text>
              ) : null}

              {isVerifying ? (
                <ActivityIndicator
                  size="small"
                  color="#7c3aed"
                  style={styles.loader}
                />
              ) : null}

              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={(text) =>
                  setCode(text.replace(/\D/g, "").slice(0, 6))
                }
                keyboardType="number-pad"
                maxLength={6}
                style={styles.hiddenInput}
                caretHidden
                autoComplete="one-time-code"
                editable={!isVerifying}
              />
            </View>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },
  loader: {
    marginTop: 16,
  },
});
