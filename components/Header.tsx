import { createHomeStyles } from "@/assets/styles/home.style";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

const Header = ({
  homeStyles,
}: {
  homeStyles: ReturnType<typeof createHomeStyles>;
}) => {
  const { colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const totaltodos = todos ? todos.length : 0;

  const progressPercentage =
    totaltodos > 0 ? (completedTodos / totaltodos) * 100 : 0;
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={"#ffffff"} />
        </LinearGradient>
        <View>
          <Text style={homeStyles.title}>Todos tasks</Text>
          <Text style={homeStyles.subtitle}>
            {completedTodos} / {totaltodos} completed
          </Text>
        </View>
      </View>
      {totaltodos > 0 && (
        <View style={homeStyles.progressContainer}>
          <View style={homeStyles.progressBarContainer}>
            <View style={homeStyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[
                  homeStyles.progressFill,
                  { width: `${progressPercentage}%` },
                ]}
              />
            </View>
            <Text style={homeStyles.progressText}>
              {progressPercentage.toFixed(0)}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
