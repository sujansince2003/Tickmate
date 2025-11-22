import { createSettingsStyles } from "@/assets/styles/setting.style";
import Clear from "@/components/Clear";
import HeaderSettings from "@/components/HeaderSettings";
import ProgressStats from "@/components/ProgressStats";
import SettingsPreferences from "@/components/SettingsPreferences";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const { colors } = useTheme();
  const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />

      <SafeAreaView style={settingStyles.safeArea}>
        <HeaderSettings settingStyles={settingStyles} />
        <ScrollView
          style={settingStyles.scrollView}
          contentContainerStyle={settingStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <SettingsPreferences />
          <Clear />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
