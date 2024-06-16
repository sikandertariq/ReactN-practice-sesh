import React from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorAdjuster = () => {
  return (
    <View>
      
        <ColorCounter text="Red" />
        <ColorCounter text="Green" />
        <ColorCounter text="Blue" />

      
    </View>
  );
};

export default ColorAdjuster;
