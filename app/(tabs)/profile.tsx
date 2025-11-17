import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>this is {params.name as string} profile page</Text>
    </View>
  );
};

export default Profile;
