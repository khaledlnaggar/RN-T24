import React from "react";
import { View, Text } from "react-native";

export default function login() {
  return (
    <View className="bg-blue-950">
      <View className="greeting items-center">
        <View className="title">
          <Text className="text-white text-3xl font-bold">Welcome Back</Text>
        </View>
      </View>
    </View>
  );
}
