import React from "react";
import { StatusBar } from "react-native";
import { CheckedProvider } from "./contexts/CheckedContext";
import { Header } from "./src/components/Header";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <CheckedProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </CheckedProvider>

  );
}
