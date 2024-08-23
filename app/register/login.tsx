import useAuthStore from "@/store/Auth";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function login() {
  return (
    <View className="bg-violet-950 h-screen">
      <Greeting />

      <Form />
    </View>
  );
}
export function Greeting() {
  return (
    <View className="greeting items-center">
      <View className="title items-center">
        <Text className="text-white font-normal text-2xl font-bold mt-14">
          Welcome Back!
        </Text>
        <Text className="text-gray-400 font-thin text-lg  mt-2">
          Please sign in to your account
        </Text>
      </View>
    </View>
  );
}
export function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const token = "123";

  const authState = useAuthStore((state) => state.setToken);
  function handleLogin() {
    authState(username, password, token);
    router.navigate("/");
    console.log(token, username);
  }
  return (
    <View className="form justify-center mt-32 items-center">
      <TextInput
        placeholder="Username"
        onChangeText={setUserName}
        placeholderTextColor="#Ffffff"
        className="bg-transparent placeholder:text-white border p-2 mb-4 border-white w-3/4 rounded-2xl"
      ></TextInput>
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        placeholderTextColor="#Ffffff"
        className="bg-transparent placeholder:text-white border  p-2 mb-4 border-white w-3/4 rounded-2xl"
      ></TextInput>
      <Pressable
        onPress={handleLogin}
        className="w-1/4 m-auto bg-white h-12 rounded-xl justify-center items-center"
      >
        <Text className="text-black">Login</Text>
      </Pressable>
    </View>
  );
}
