import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddLandFormScreen() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [landType, setLandType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [area, setArea] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Add Land Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        {[1, 2, 3, 4].map((dot, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === 0 ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Land Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter land title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#6b7280"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Land Type</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.selectText}>
              {landType || "Select land type"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Desired Project Type</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.selectText}>{projectType || "Select"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Estimated Land Area</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter land area"
            value={area}
            onChangeText={setArea}
            keyboardType="numeric"
            placeholderTextColor="#6b7280"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Select</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.selectText}>{selectedUnit || "Select"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.draftBtn}>
          <Text style={styles.draftText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 18, fontWeight: "600" },

  stepIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  dotActive: { backgroundColor: "#111" },
  dotInactive: { backgroundColor: "#E5E7EB" },

  form: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 14,
  },
  selectText: {
    color: "#6b7280",
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  draftBtn: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
  },
  draftText: { fontWeight: "600", color: "#111" },

  nextBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
  },
  nextText: { fontWeight: "600", color: "#fff" },
});
