import { createSettingsStyles } from "@/assets/styles/setting.style";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

const HeaderSettings = ({
  settingStyles,
}: {
  settingStyles: ReturnType<typeof createSettingsStyles>;
}) => {
  const { colors } = useTheme();

  return (
    <View style={settingStyles.header}>
      <View style={settingStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={settingStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={"#ffffff"} />
        </LinearGradient>
        <View>
          <Text style={settingStyles.title}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderSettings;
