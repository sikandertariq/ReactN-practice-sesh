import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const ColorAdjuster = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        setRed((prev) =>
          prev + change > 255 ? 255 : prev + change < 0 ? 0 : prev + change
        );
        return;
      case "green":
        setGreen((prev) =>
          prev + change > 255 ? 255 : prev + change < 0 ? 0 : prev + change
        );
        return;
      case "blue":
        setBlue((prev) =>
          prev + change > 255 ? 255 : prev + change < 0 ? 0 : prev + change
        );
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -COLOR_INCREMENT)}
      />
      <View>
        <View
          style={{
            height: 150,
            width: 150,

            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          }}
        />
      </View>
    </View>
  );
};

export default ColorAdjuster;
