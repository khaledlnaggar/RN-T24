import React from "react";
import { View, Text } from "react-native";
import CheckBox from "./CheckBox";

export default function TaskItem() {
  return (
    <View
      className="flex flex-row p-5 bg-white items-center rounded-lg w-full"
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}
    >
      <CheckBox value={true} onChange={() => {}} />
      <Text className="px-4">Task</Text>
    </View>
  );
}
