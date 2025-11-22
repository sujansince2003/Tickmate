import { createSettingsStyles } from "@/assets/styles/setting.style";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const SettingsPreferences = () => {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Preferences</Text>

      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="moon" size={18} color={"#ffffff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#ffffff"}
        />
      </View>

      {/* Auto Sync */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="sync" size={18} color={"#ffffff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSyncEnabled}
          onValueChange={setIsAutoSyncEnabled}
          thumbColor={"#ffffff"}
        />
      </View>

      {/* Notification */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="notifications" size={18} color={"#ffffff"} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Notification</Text>
        </View>
        <Switch
          value={isNotificationEnabled}
          onValueChange={setIsNotificationEnabled}
          thumbColor={"#ffffff"}
        />
      </View>
    </LinearGradient>
  );
};

export default SettingsPreferences;
