import React, { useState } from "react";
import { Pressable, View } from "react-native";

type CheckBoxPropType = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function CheckBox({ value, onChange }: CheckBoxPropType) {
  const handlePress = () => {
    onChange(!value);
  };

  return (
    <Pressable
      className="border-black border-[2px] w-5 aspect-square rounded-[2px]"
      onPress={handlePress}
    >
      <View
        className="border-white border-[2px] w-full aspect-square rounded-[2px]"
        style={{
          backgroundColor: value ? "black" : "white",
        }}
      />
    </Pressable>
  );
}
