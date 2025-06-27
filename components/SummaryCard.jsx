// components/SummaryCard.js  <- Note the .js extension

import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// We've removed the type alias and the prop type annotation
export default function SummaryCard({
  label,
  value,
  actionText,
  imageUrl,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.actionText}>{actionText}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

// Add PropType validation for better development experience
SummaryCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  // ... styles are exactly the same
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 16,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#94a3b8",
    fontWeight: "500",
  },
  value: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1e293b",
    marginVertical: 4,
  },
  actionText: {
    fontSize: 14,
    color: "#64748b",
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#e2e8f0",
    marginLeft: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
