import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextInputLogin = styled.TextInput`
  width: 100%;
  color: ${colors.light};
  margin-bottom: 15px;
  background-color: ${colors.darkGray};
  font-size: 20px;
  border-radius: 4px;
`;

export const Label = styled(TextDefault)`
  width: 96%;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  margin-bottom: 5px;
`;
