/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from "react";

import {
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

import { Feather } from "@expo/vector-icons";
import { Container, Header, Title } from "./styles";

type Props = DrawerContentComponentProps;

export function DrawerContent({ ...props }: Props) {
  return (
    <Container>
      <Header>
        <Title>header</Title>
      </Header>
      <DrawerItemList {...props} />
    </Container>
  );
}
