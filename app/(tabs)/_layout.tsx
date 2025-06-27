import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "#64748B",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          tabBarStyle: {
            backgroundColor: "#F8FAFC", // subtle light gray
            height: Platform.OS === "ios" ? 70 : 60,
            borderTopWidth: 0.5,
            borderTopColor: "#e2e8f0", // soft border line
            elevation: 10,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName = "";

            switch (route.name) {
              case "index":
                iconName = focused ? "home" : "home-outline";
                break;
              case "MyLandScreen":
                iconName = focused ? "leaf" : "leaf-outline";
                break;
              case "ProposalsListScreen":
                iconName = focused ? "document-text" : "document-text-outline";
                break;
              case "ProfileScreen":
                iconName = focused ? "person-circle" : "person-circle-outline";
                break;
              default:
                iconName = "alert-circle-outline";
            }

            return (
              <Ionicons
                name={iconName as any}
                size={focused ? 26 : 22}
                color={color}
              />
            );
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="MyLandScreen" options={{ title: "My Land" }} />
        <Tabs.Screen
          name="ProposalListScreen"
          options={{ title: "Proposals" }}
        />
        <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
}
