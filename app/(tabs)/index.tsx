import { ActivityItemType, SummaryItem } from "@/types/HomeData";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ActivityItem from "../../components/ActivityItem";
import DeveloperCard from "../../components/DeveloperCard";
import SummaryCard from "../../components/SummaryCard";
import useHomeData from "../../hooks/useHomeData";

export default function HomeScreen() {
  const { summary, developers, activities, loading } = useHomeData();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#2563EB"
        style={{ flex: 1, marginTop: 100 }}
      />
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://placehold.co/100x100" }}
          style={styles.profile}
        />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hi, Amelia!</Text>

      {/* Call to Action */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>List Your Land</Text>
      </TouchableOpacity>

      {/* Summary Section */}
      <Text style={styles.section}>Summary</Text>
      {summary.map((item: SummaryItem) => (
        <SummaryCard
          key={item.id}
          label={item.title}
          value={item.value}
          actionText={item.subtitle}
          imageUrl={item.imageUrl}
          onPress={item.onPress}
        />
      ))}

      {/* Developer Section */}
      <Text style={styles.section}>Featured Developer Propositions</Text>
      <FlatList
        data={developers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DeveloperCard
            title={item.title}
            type={item.type}
            imageUrl={item.imageUrl}
          />
        )}
        /* --- improved scroll feel --- */
        snapToInterval={152} // 140-width card + 12 margin
        snapToAlignment="start"
        decelerationRate="fast"
        /* --- spacing --- */
        contentContainerStyle={{ paddingLeft: 2, paddingRight: 16 }}
        style={{ marginBottom: 20 }}
      />

      {/* Activity Section */}
      <Text style={styles.section}>Recent Activity</Text>
      {activities.map((item: ActivityItemType) => (
        <ActivityItem key={item.id} {...item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: { width: 40, height: 40, borderRadius: 20 },
  greeting: { fontSize: 22, fontWeight: "600", marginVertical: 10 },
  ctaButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  ctaText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  section: { fontSize: 18, fontWeight: "700", marginVertical: 10 },
});
