// File: /components/ActivityItem.jsx

import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ActivityItem({ icon, text, time }) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={icon}
        size={24}
        color="#2563EB"
        style={styles.icon}
      />
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: "#111",
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});
