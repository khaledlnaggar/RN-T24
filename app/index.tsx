import ModalToggle from "@/components/Modal";
import Task from "@/components/Task";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  function handleModalToggle() {
    setIsShown(!isShown);
  }
  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function addTask(task: string) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }
  return (
    <View className="flex-1 justify-center text-center">
      {tasks.map((task, ix) => {
        return (
          <Task
            task={task}
            key={ix}
            handleDeleteTask={() => handleDeleteTask(ix)}
          />
        );
      })}

      <Pressable
        onPress={handleModalToggle}
        className="w-1/4 m-auto bg-blue-500 h-12 rounded-xl justify-center items-center"
      >
        <Text className=" text-lg text-white">Add Task</Text>
      </Pressable>
      <Pressable className="w-1/4 m-auto bg-blue-500 h-12 rounded-xl justify-center items-center">
        <Link className=" text-lg text-white" href="/register/login">
          Login
        </Link>
      </Pressable>

      <ModalToggle
        isShown={isShown}
        setIsShown={setIsShown}
        addTask={addTask}
      />
    </View>
  );
}
