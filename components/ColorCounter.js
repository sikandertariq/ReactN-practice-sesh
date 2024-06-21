import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increment ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrement ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ColorCounter;
