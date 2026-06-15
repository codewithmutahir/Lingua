import Ionicons from "@expo/vector-icons/Ionicons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CIRCLE_SIZE = 48;
const TAB_BAR_HEIGHT = 56;
const ACTIVE_PURPLE = "#6c4ef5";
const INACTIVE_COLOR = "#9CA3AF";

type TabConfig = {
  routeName: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: TabConfig[] = [
  {
    routeName: "index",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    routeName: "learn",
    label: "Learn",
    icon: "book-outline",
    activeIcon: "book",
  },
  {
    routeName: "ai-teacher",
    label: "AI Teacher",
    icon: "school-outline",
    activeIcon: "school",
  },
  {
    routeName: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    activeIcon: "chatbubble",
  },
  {
    routeName: "profile",
    label: "Profile",
    icon: "person-outline",
    activeIcon: "person",
  },
];

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 220,
  mass: 0.8,
};

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const containerWidth = useSharedValue(0);
  const translateX = useSharedValue(0);

  const moveIndicator = (index: number, width: number) => {
    if (width <= 0) {
      return;
    }

    const slotWidth = width / state.routes.length;
    translateX.value = withSpring(
      index * slotWidth + slotWidth / 2 - CIRCLE_SIZE / 2,
      SPRING_CONFIG,
    );
  };

  useEffect(() => {
    if (containerWidth.value > 0) {
      moveIndicator(state.index, containerWidth.value);
    }
  }, [state.index]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderTopColor: "#E5E7EB",
      }}
    >
      <View
        style={{ height: TAB_BAR_HEIGHT }}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          containerWidth.value = width;
          moveIndicator(state.index, width);
        }}
      >
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 4,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: ACTIVE_PURPLE,
            },
            animatedCircleStyle,
          ]}
        />

        <View style={{ flex: 1, flexDirection: "row" }}>
          {state.routes.map((route, index) => {
            const config =
              TAB_CONFIG.find((tab) => tab.routeName === route.name) ??
              TAB_CONFIG[index];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                accessibilityRole="button"
                accessibilityState={{ selected: isFocused }}
                accessibilityLabel={config.label}
              >
                {isFocused ? (
                  <View
                    style={{
                      width: CIRCLE_SIZE,
                      height: CIRCLE_SIZE,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons
                      name={config.activeIcon}
                      size={22}
                      color="#ffffff"
                    />
                  </View>
                ) : (
                  <View style={{ alignItems: "center", paddingTop: 6 }}>
                    <Ionicons name={config.icon} size={22} color={INACTIVE_COLOR} />
                    <Text
                      style={{
                        marginTop: 2,
                        fontFamily: "Poppins-Regular",
                        fontSize: 11,
                        lineHeight: 14,
                        color: INACTIVE_COLOR,
                        textAlign: "center",
                      }}
                    >
                      {config.label}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
