import CheckBox from "@/components/CheckBox";
import TaskItem from "@/components/TaskItem";
import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function app() {
  const [state, setState] = useState(false);

  return (
    <SafeAreaView>
      <View className="p-5 flex gap-y-5 justify-center items-center">
        <Text className="text-4xl font-semibold text-center">My ToDo App</Text>
        <TaskItem />
      </View>
    </SafeAreaView>
  );
}
