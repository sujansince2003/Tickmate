import { createSettingsStyles } from "@/assets/styles/setting.style";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Clear = () => {
  const { colors } = useTheme();
  const settingStyles = createSettingsStyles(colors);

  const cleartodos = useMutation(api.todos.clearAllTodos);

  const handleClear = async () => {
    try {
      Alert.alert(
        "Clear All Todos",
        "Are you sure you want to clear all todos?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Clear",
            onPress: async () => {
              await cleartodos();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Failed to clear todos");
      console.error(error);
    }
  };
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Preferences</Text>

      <TouchableOpacity
        style={[settingStyles.settingItem, { borderBottomWidth: 1 }]}
        onPress={() => {
          handleClear();
        }}
      >
        <View style={settingStyles.settingItem}>
          <View style={settingStyles.settingLeft}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyles.settingIcon}
            >
              <Ionicons name="trash-outline" size={18} color={"#ffffff"} />
            </LinearGradient>
            <Text style={settingStyles.settingText}>Dark Mode</Text>
          </View>
          <Ionicons name="backspace-outline" size={18} color={"#ffffff"} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Clear;
