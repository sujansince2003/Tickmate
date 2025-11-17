import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="contact" options={{ title: "contact" }} />
      <Tabs.Screen name="test" options={{ title: "test" }} />
    </Tabs>
  );
}
