import { StyleSheet, Text, View } from "react-native";

type FeedbackMetric = {
  label: string;
  value: string;
  color: string;
};

type LessonFeedbackCardProps = {
  metrics?: FeedbackMetric[];
};

const DEFAULT_METRICS: FeedbackMetric[] = [
  { label: "Speaking", value: "Excellent", color: "#21C16B" },
  { label: "Pronunciation", value: "Great", color: "#4D8BFF" },
  { label: "Grammar", value: "Good", color: "#6C4EF5" },
];

export function LessonFeedbackCard({
  metrics = DEFAULT_METRICS,
}: LessonFeedbackCardProps) {
  return (
    <View style={styles.card}>
      {metrics.map((metric, index) => (
        <View key={metric.label} style={styles.metricWrapper}>
          {index > 0 ? <View style={styles.divider} /> : null}
          <View style={styles.metric}>
            <Text style={styles.label}>{metric.label}</Text>
            <Text style={[styles.value, { color: metric.color }]}>
              {metric.value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 0,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  metricWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: 1,
    height: 36,
    backgroundColor: "#E5E7EB",
    marginRight: 0,
  },
  metric: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    lineHeight: 18,
    color: "#0D132B",
    marginBottom: 4,
  },
  value: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    lineHeight: 20,
  },
});
