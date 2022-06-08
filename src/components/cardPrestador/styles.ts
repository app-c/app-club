import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
  background-color: ${colors.cinza[3]};
  width: 100%;
  margin-top: ${RFValue(8)}px;
  padding: 10px 20px;
`;

export const Title = styled.Text``;

export const Logo = styled.View`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  background-color: ${colors.cinza[2]};
  align-items: center;
  justify-content: center;
`;

export const BxDescricao = styled.View`
  width: 70%;
  height: ${RFValue(120)}px;
  background-color: ${colors.cinza[4]};
`;

export const TitleLocalidade = styled.Text`
  align-self: center;
  margin-top: ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Maps = styled.TouchableOpacity`
  margin-top: ${RFValue(16)}px;
`;
