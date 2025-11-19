import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello this is sujagfgn</Text>
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
