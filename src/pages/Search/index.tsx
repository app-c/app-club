import React from "react";
import { View } from "react-native";
import { Input } from "../../components/Input";
import { Box, Container, Content, Select, Title } from "./styles";

export function Search() {
  return (
    <Container>
      <Title>Search</Title>

      <Box>
        <Content>
          <Title>CIDADE</Title>

          {/* <View style={{ width: 200 }}> */}
          <Input />
          {/* </View> */}
        </Content>
      </Box>
    </Container>
  );
}
