import React, { useCallback } from "react";
import { Linking } from "react-native";
import {
  Box,
  BxDescricao,
  Container,
  Content,
  Logo,
  Maps,
  Title,
  TitleEstado,
  TitleLocalidade,
} from "./styles";

export function CardPrestador() {
  const OpenUrl = useCallback(async (url: string) => {
    const conOpen = Linking.canOpenURL(url);

    if (conOpen) {
      await Linking.openURL(url);
    }
  }, []);
  return (
    <Container>
      <Content>
        <Logo>
          <Title>LOGO</Title>
        </Logo>

        <BxDescricao>
          <Title>DESCRIÇAO</Title>
        </BxDescricao>
      </Content>
      <TitleLocalidade>LOCALIDADE</TitleLocalidade>

      <Maps
        onPress={() =>
          OpenUrl(
            "https://www.google.com/maps/search/?api=1&query=47.595152-122.331639"
          )
        }
      >
        <Title>VER NO GOOGLE MAPS</Title>
      </Maps>
    </Container>
  );
}
