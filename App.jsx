/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/style-prop-object */
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Monda_400Regular,
  Monda_700Bold,
  useFonts,
} from "@expo-google-fonts/monda";
import AppLoading from "expo-app-loading";
import { Route } from "./src/routes";
import { Header } from "./src/components/Header";

export default function App() {
  const [load] = useFonts({
    Monda_400Regular,
    Monda_700Bold,
  });

  if (!load) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" hidden />
        <Header />
        <Route />
      </View>
    </NavigationContainer>
  );
}
