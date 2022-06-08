import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { colors, fonts } = theme;

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.REGULAR};
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(35)}px;
  padding: 5px 20px;
  border-width: 1px;

  border-color: ${colors.text[1]};
  border-radius: ${RFValue(5)}px;

  align-items: center;
  justify-content: center;
`;

export const TitleEstado = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${fonts.BOLD};
  margin-top: ${RFValue(32)}px;
`;
