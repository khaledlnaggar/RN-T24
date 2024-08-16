import React, { useState } from "react";
import { View, Modal, TextInput, Text, Pressable } from "react-native";
type ModalType = {
  isShown: boolean;
  setIsShown: (e: boolean) => void;
  addTask: (e: string) => void;
};
export default function ModalToggle({
  isShown,
  setIsShown,
  addTask,
}: ModalType) {
  const [newTask, setNewTask] = useState("");

  function handleNewTask() {
    addTask(newTask);
    setIsShown(false);
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShown}
      onRequestClose={() => setIsShown(false)}
    >
      <View className=" flex-1 justify-center items-center bg-white/30">
        <View className=" bg-gray-500 bg-opacity-70 w-1/2 h-1/4 justify-center items-center">
          <Text className="text-white text-lg">Add Task</Text>
          <View className="w-3/4">
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              className="w-full bg-white rounded-xl"
            ></TextInput>
            <Pressable
              onPress={() => handleNewTask()}
              className="w-1/4 m-auto bg-blue-500 h-12 rounded-xl justify-center items-center"
            >
              <Text>ADD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
