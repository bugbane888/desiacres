import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useMyLandData from "../../hooks/useMylandData";

export default function MyLandScreen() {
  const router = useRouter(); // 2. Initialize the router
  const { tab, setTab, filteredLand } = useMyLandData();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Land</Text>
        {/* 3. Add onPress handler to navigate */}
        <TouchableOpacity onPress={() => router.push("../add-land")}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, tab === "Active" && styles.activeTab]}
          onPress={() => setTab("Active")}
        >
          <Text
            style={[styles.tabText, tab === "Active" && styles.activeTabText]}
          >
            Active Listings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, tab === "Draft" && styles.activeTab]}
          onPress={() => setTab("Draft")}
        >
          <Text
            style={[styles.tabText, tab === "Draft" && styles.activeTabText]}
          >
            Drafts
          </Text>
        </TouchableOpacity>
      </View>

      {/* Listings */}
      <FlatList
        data={filteredLand}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.acres}>{item.acres} acres</Text>
              <TouchableOpacity style={styles.viewBtn}>
                <Text style={styles.viewBtnText}>View Interests</Text>
                <Ionicons name="chevron-forward" size={16} color="#111" />
              </TouchableOpacity>
            </View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "700" },

  tabContainer: {
    backgroundColor: "#f1f5f9",
    flexDirection: "row",
    borderRadius: 25,
    marginBottom: 12,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "white",
  },
  tabText: {
    color: "#64748b",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#111",
    fontWeight: "700",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  status: { color: "#2563EB", fontSize: 12, fontWeight: "600" },
  cardTitle: { fontSize: 15, fontWeight: "700", marginTop: 4 },
  acres: { fontSize: 13, color: "#666", marginTop: 2 },
  viewBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  viewBtnText: { fontSize: 13, fontWeight: "500", marginRight: 4 },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginLeft: 10,
    backgroundColor: "#ccc",
  },
});
