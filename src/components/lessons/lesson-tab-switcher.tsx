import { Pressable, StyleSheet, Text, View } from "react-native";

type LessonTab = "lessons" | "practice";

type LessonTabSwitcherProps = {
  activeTab: LessonTab;
  onTabChange: (tab: LessonTab) => void;
};

const THEME = {
  purple: "#6C4EF5",
  surface: "#F6F7FB",
  selectedBg: "#F3F0FF",
  textSecondary: "#6B7280",
  white: "#FFFFFF",
} as const;

export function LessonTabSwitcher({
  activeTab,
  onTabChange,
}: LessonTabSwitcherProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onTabChange("lessons")}
        style={[styles.tab, activeTab === "lessons" && styles.activeTab]}
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === "lessons" }}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "lessons" && styles.activeTabText,
          ]}
        >
          Lessons
        </Text>
        {activeTab === "lessons" ? <View style={styles.activeIndicator} /> : null}
      </Pressable>

      <Pressable
        onPress={() => onTabChange("practice")}
        style={[styles.tab, activeTab === "practice" && styles.activeTab]}
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === "practice" }}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "practice" && styles.activeTabText,
          ]}
        >
          Practice
        </Text>
        {activeTab === "practice" ? <View style={styles.activeIndicator} /> : null}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: THEME.surface,
    padding: 4,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    position: "relative",
  },
  activeTab: {
    backgroundColor: THEME.white,
    shadowColor: THEME.purple,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  tabText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: THEME.textSecondary,
  },
  activeTabText: {
    fontFamily: "Poppins-SemiBold",
    color: THEME.purple,
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 3,
    borderRadius: 2,
    backgroundColor: THEME.purple,
  },
});
