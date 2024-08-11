import Task from "@/components/Task";
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([
    { details: "todo app", done: false },
    { details: "read docs", done: false },
  ]);

  const [value, setValue] = useState("");

  const addTask = (value: string) => {
    setTasks((oldValue) => [...oldValue, { details: value, done: false }]);
  };

  const handelDone = (newValue: boolean, index: number) => {
    setTasks((preTasks) => {
      const temp = [...preTasks];
      temp[index].done = newValue;
      return temp;
    });
  };

  return (
    <View className="flex-1 p-10 items-center">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDone={(value) => handelDone(value, index)}
        />
      ))}

      <View className="w-full gap-y-2">
        <Text>New Task:</Text>
        <TextInput
          className="bg-white rounded border w-full"
          onChangeText={setValue}
        />
        <Button title="add task" onPress={() => addTask(value)} />
      </View>
    </View>
  );
}
