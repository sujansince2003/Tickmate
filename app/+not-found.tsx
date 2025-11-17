import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const NotFound = () => {
  return (
    <View>
      <Text>Page not found</Text>
      <Stack.Screen options={{ title: "Not Found" }} />
    </View>
  );
};

export default NotFound;
