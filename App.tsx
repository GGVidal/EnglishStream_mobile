import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/routes/navigator";

// Create the stack navigator and type it using RootStackParamList

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
