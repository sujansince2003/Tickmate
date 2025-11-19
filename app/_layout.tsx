// import { Stack } from "expo-router";

// export default function RootLayout() {
//   // return <Stack />;
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ title: "Home" }} />
//       <Stack.Screen name="about" options={{ title: "About" }} />
//     </Stack>
//   );
// }
import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
