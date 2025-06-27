import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface LandItem {
  id: number;
  title: string;
  status: "Active" | "Under Review" | "Draft";
  acres: number;
  imageUrl: string;
}

interface Props {
  land: LandItem;
  onPress: () => void; // “View Interests”
}

export default function LandCard({ land, onPress }: Props) {
  const { title, status, acres, imageUrl } = land;

  return (
    <View style={styles.card}>
      {/* left block */}
      <View style={{ flex: 1 }}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.acres}>{acres} acres</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View Interests</Text>
          <Text style={{ fontSize: 16 }}>›</Text>
        </TouchableOpacity>
      </View>

      {/* thumb */}
      <Image source={{ uri: imageUrl }} style={styles.thumb} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 24,
    alignItems: "center",
  },
  status: { color: "#6b7280", fontSize: 13, marginBottom: 2 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
  acres: { color: "#6b7280", fontSize: 13 },
  thumb: { width: 90, height: 90, borderRadius: 12, marginLeft: 16 },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  buttonText: { marginRight: 4, fontWeight: "500" },
});
