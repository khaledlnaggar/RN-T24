import { Navbar } from "@/components/Navbar";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function layout() {
  return (
    <View className="flex-1 pt-10">
      <Navbar />
      <Slot />
    </View>
  );
}
