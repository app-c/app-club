import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(26)}px;
  color: ${colors.text[1]};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${colors.text[2]};
  justify-content: center;
  padding: 30px 10px;
`;
