import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { CardPrestador } from "../../components/cardPrestador";
import { Header } from "../../components/Header";
import {
  BoxInput,
  ButtonSearch,
  Container,
  Seach,
  Title,
  TitleEstado,
} from "./styles";

export function HOME() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Title>HOME</Title>

      <View style={{ padding: 20 }}>
        <ButtonSearch onPress={() => navigate("search")}>
          <Title>ENCONTRE UM PROFISSIONAL</Title>
        </ButtonSearch>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <TitleEstado>PRESTADORES PROXIMOS</TitleEstado>
        <CardPrestador />
        <CardPrestador />

        <CardPrestador />
        <CardPrestador />

        <CardPrestador />
        <CardPrestador />

        <CardPrestador />
        <CardPrestador />
      </ScrollView>
    </Container>
  );
}
