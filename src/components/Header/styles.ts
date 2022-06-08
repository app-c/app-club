import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
  background-color: ${colors.secundary[2]};
  padding: 20px 15px;
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${colors.text[1]};
  font-family: ${fonts.BOLD};
`;

export const Logo = styled.View`
  width: ${RFValue(55)}px;
  height: ${RFValue(45)}px;
  align-items: center;
  justify-content: center;

  background-color: ${colors.text[3]};
`;
