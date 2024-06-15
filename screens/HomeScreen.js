import React from "react";
import { Button, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-purple-400 ">
      <TouchableOpacity
        className="bg-blue-500 p-5 m-5 rounded-lg justify-center items-center"
        title="Go to Jane's profile"
        onPress={() => {
          navigation.navigate("Profile", { name: "Jane" });
        }}
      >
        <Text className="">Go to Jane's profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-500 p-5 m-5 rounded-lg justify-center items-center"
        title="Go to image screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      >
        <Text className="">Go to image screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-500 p-5 m-5 rounded-lg justify-center items-center"
        title="Go to List screen"
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>Go to List </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
