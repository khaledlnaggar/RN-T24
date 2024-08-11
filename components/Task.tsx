import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import CheckBox from "./Checkbox";
type TaskPropsType = {
  task: { details: string; done: boolean };
  onDone: (value: boolean) => void;
};

export default function Task({ task, onDone }: TaskPropsType) {
  const handelChange = (value: boolean) => {
    onDone(value);
  };

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
        <CheckBox value={task.done} onChange={handelChange} />
        <Text className="mx-2">{task.details}</Text>
      </View>
      <Ionicons name="delete-outline" size={32} />
    </View>
  );
}
