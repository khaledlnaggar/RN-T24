import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import CheckBox from "./Checkbox";
type TaskPropsType = {
  task: string;
  handleDeleteTask: () => void;
};

export default function Task({ task, handleDeleteTask }: TaskPropsType) {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
      }}
      className="flex-row justify-between items-center bg-white p-4 my-2 rounded-xl w-full"
    >
      <View className="flex-row ">
        <Text className="mx-2 text-black">{task}</Text>
      </View>
      <Ionicons onPress={handleDeleteTask} name="delete-outline" size={32} />
    </View>
  );
}
