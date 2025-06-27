import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DeveloperCard({ title, type, imageUrl }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  image: { width: "100%", height: 90 },
  info: { padding: 10 },
  title: { fontSize: 14, fontWeight: "600", color: "#111" },
  type: { fontSize: 12, color: "#666", marginTop: 4 },
});
