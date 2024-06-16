import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color}) => {
  return (
    <View>
    <Text>{color}</Text>
      <Button title={`Increment ${color}`} />
      <Button title={`Decrement ${color}`} />
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
