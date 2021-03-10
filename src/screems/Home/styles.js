import { StatusBar } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.dark};
  padding-top: ${StatusBar.currentHeight}px;
`;

export const ToolBar = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};
  background-color: ${colors.primary};
`;

export const TextToolBar = styled(TextDefault)`
  flex: 1;
  font-size: 20px;
  color: ${colors.dark};
  font-weight: bold;
  text-align: center;
`;

export const IconSignOut = styled(Icon)`
font-size: 24px;
color: ${colors.dark};
right: 4px;
position: absolute;
`;