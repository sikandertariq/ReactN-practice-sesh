import React from "react";
import { Text, Image, View } from "react-native";

const ImageComp = (props) => {
  return (
    <View>
      <Image
        source={props.imageSource}
        style={{ width: 200, height: 200 }}
      />
      <Text>{props.title}</Text>
    </View>
  );
};
export default ImageComp;
