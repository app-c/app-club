import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../pages/Search";
import { HOME } from "../pages/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function RoutesStacks() {
  return (
    <Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }}>
      <Screen name="HOME" component={HOME} />
      <Screen name="search" component={Search} />
    </Navigator>
  );
}
