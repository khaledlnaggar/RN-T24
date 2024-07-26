import { Navbar } from "@/components/Navbar";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <View className="pt-10">
            <Navbar />
          </View>
        ),
      }}
    />
  );
}
