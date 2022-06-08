import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
  flex: 1;
  /* padding: 20px; */
`;

export const Title = styled.Text``;

export const Box = styled.View`
  background-color: ${colors.cinza[3]};
  /* width: 100%; */
  padding: 10px 40px;
`;

export const Content = styled.View`
  /* flex-direction: row; */
`;

export const Select = styled.TouchableOpacity``;
