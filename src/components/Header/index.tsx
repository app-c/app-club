import React from "react";
import { Container, Logo, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <Title>LOGO</Title>
      </Logo>

      <Title style={{ marginLeft: 30 }}>CLUB DO VAZAMENTO</Title>
    </Container>
  );
}
