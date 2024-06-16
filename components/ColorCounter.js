import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color,IncreaseRed,DecreaseRed}) => {
  return (
    <View>
    <Text>{color}</Text>
      <Button title={`Increment ${color}`} onPress={IncreaseRed} />
      <Button title={`Decrement ${color}`} onPress={DecreaseRed}/>
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
