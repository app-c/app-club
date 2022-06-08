import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME } from "../pages/Home";
import { DrawerContent } from "../components/drawer";
import theme from "../global/styles/theme";
import { RoutesStacks } from "./RoutesStacks";

const { Navigator, Screen } = createDrawerNavigator();

export function AppAuth() {
  return (
    <Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerLabelStyle: { fontFamily: theme.fonts.REGULAR },
        headerShown: false,
        drawerActiveTintColor: theme.colors.text[2],
        drawerInactiveTintColor: theme.colors.text[4],
      }}
      initialRouteName="home"
    >
      <Screen name="INICIO" component={RoutesStacks} />
    </Navigator>
  );
}
