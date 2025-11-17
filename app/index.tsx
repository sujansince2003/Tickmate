import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello this is sujagfgn</Text>
      <Link href="/about">About</Link>
      <Link href="/product">Product</Link>
      {/* <Stack.Screen name="about" options={{ title: "About me" }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
