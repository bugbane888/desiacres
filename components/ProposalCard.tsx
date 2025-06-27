// components/ProposalCard.tsx
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  id: number;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  onPress?: () => void;
}

export default function ProposalCard({
  title,
  type,
  description,
  imageUrl,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Developer</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  infoContainer: { flexDirection: "row", alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 12, marginLeft: 16 },
  title: { fontSize: 16, fontWeight: "700", color: "#111" },
  label: { color: "#888", fontSize: 13 },
  type: { fontSize: 14, color: "#666", marginTop: 4 },
  button: {
    marginTop: 10,
    backgroundColor: "#f3f4f6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: { fontWeight: "500", color: "#111" },
});
