import { React, useState } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorAdjuster = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);

  return (
    <View>
      <ColorCounter
        color="Red"
        IncreaseRed={() => {
          setRed(red + 1);
        }}
        DecreaseRed={() => {
          setRed(red - 1);
        }}
      />

      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
      <View></View>
    </View>
  );
};

export default ColorAdjuster;
