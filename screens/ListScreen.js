import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const DATA = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "four Item" },
  { id: "5", title: "five Item" },
  { id: "6", title: "six Item" },
  { id: "7", title: "seven Item" },
];

const Item = ({ title }) => (
  <View className="border">
    <Text className="my-10">{title}</Text>
  </View>
);

const ListScreen = () => {
  return (
    <View className="flex-1 bg-purple-300">
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ListScreen;
