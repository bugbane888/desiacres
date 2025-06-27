import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ActionItem {
  id: string;
  icon: string;
  label: string;
  onPress?: () => void;
}

interface Props {
  actions: ActionItem[];
}

export default function ProfileActionGroup({ actions }: Props) {
  return (
    <View style={styles.container}>
      {actions.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={item.onPress}
          activeOpacity={0.8}
        >
          <Ionicons name={item.icon as any} size={24} color="#2563EB" />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#f3f4f6",
    width: "47%",
    aspectRatio: 1.8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginTop: 6,
  },
});
