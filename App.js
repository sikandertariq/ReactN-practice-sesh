// In App.js in a new project

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ImageScreen from "./screens/ImageScreen";
import ListScreen from "./screens/ListScreen";
import CounterScreen from "./screens/CounterScreen";
import ColorScreen from "./screens/ColorScreen";
import ColorAdjuster from "./screens/ColorAdjuster";
import TextScreen from "./screens/TextScreen";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Color Adjuster" component={ColorAdjuster} />
        <Stack.Screen name="Text" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView className='flex-1 justify-center  bg-purple-400'>
    //   <Text className='' >App Component</Text>
    // </SafeAreaView>
  );
}

export default App;
