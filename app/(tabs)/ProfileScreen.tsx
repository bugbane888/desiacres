import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileActionGroup from "../../components/ProfileActionGroup";
import ProfileHeader from "../../components/ProfileHeader";
import useUserProfile from "../../hooks/useUserProfile";

export default function ProfileScreen() {
  const { user, loading } = useUserProfile();

  if (loading || !user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  const actions = [
    {
      id: "1",
      icon: "home-outline",
      label: "My Lands",
      onPress: () => Alert.alert("Navigate to", "My Lands"),
    },
    {
      id: "2",
      icon: "heart-outline",
      label: "Saved Listings",
      onPress: () => Alert.alert("Navigate to", "Saved Listings"),
    },
    {
      id: "3",
      icon: "document-text-outline",
      label: "My Interests",
      onPress: () => Alert.alert("Navigate to", "My Interests"),
    },
    {
      id: "4",
      icon: "settings-outline",
      label: "Settings",
      onPress: () => Alert.alert("Navigate to", "Settings"),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader user={user} onEdit={() => Alert.alert("Edit Profile")} />
      <ProfileActionGroup actions={actions} />

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => Alert.alert("Logged out")}
      >
        <Ionicons name="log-out-outline" size={20} color="#EF4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    justifyContent: "center",
  },
  logoutText: {
    marginLeft: 8,
    color: "#EF4444",
    fontWeight: "600",
    fontSize: 16,
  },
});
