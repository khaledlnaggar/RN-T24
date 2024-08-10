import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  const [user, setName] = useState<{
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
  }>();
  const [selectedValue, setSelectedValue] = useState<string | number>(
    user?.name ?? ""
  );

  return (
    <View className="flex-1 justify-center items-center">
      {user ? (
        <View className="justify-center items-center">
          <Image
            className="w-28 h-28 rounded-full "
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <Text className="text-xl"> {selectedValue} </Text>

          <View className="flex-row gap-3">
            <Pressable
              className="active:opacity-70"
              onPress={() => setSelectedValue(user.phone)}
            >
              <Ionicons size={32} name="phone" />
              <Text>Phone</Text>
            </Pressable>

            <Ionicons
              size={32}
              name="email"
              onPress={() => setSelectedValue(user.email)}
            />
            <Ionicons
              size={32}
              name="home"
              onPress={() => setSelectedValue(user.address)}
            />
            <Ionicons
              size={32}
              name="calendar-month"
              onPress={() => setSelectedValue(user.age)}
            />
            <Ionicons
              size={32}
              name="account-circle"
              onPress={() => setSelectedValue(user.name)}
            />
          </View>
        </View>
      ) : (
        <Button
          title="login"
          onPress={() =>
            setName({
              name: "hossin amin",
              age: 25,
              email: "hossinamin@gmail.com",
              address: "21 street nasir city",
              phone: "01024572095",
            })
          }
        />
      )}
    </View>
  );
}
