import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato", //color of the active tab
        tabBarInactiveTintColor: "gray", //color of the inactive tab
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "red",
          borderTopWidth: 1,
          height: 90,
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          marginBottom: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
