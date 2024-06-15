import { View } from "react-native";
import ImageComp from "../components/ImageComp";


const ImageScreen = () => {
  return (
    <View>
      <ImageComp title="Forest" imageSource={require('../images/forest.jpg')} />
      <ImageComp title="Beach" imageSource={require('../images/beach.jpg')}/>
      <ImageComp title="Mountain" imageSource={require('../images/mountain.jpg')} />
    </View>
  );
};

export default ImageScreen;
