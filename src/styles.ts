import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';
import { TextStyle, ButtonStyle } from './types/customAlertProps';

type ModalBackgroundProps = {
  isShown: boolean;
};
export const ModalBackground = styled.View<ModalBackgroundProps>`
  display: ${(props) => (props.isShown ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  opacity: 0.5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Animated.View)`
  width: 90%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #fff;
  padding: 15px 11px 25px;
  border-radius: 13px;
`;

export const AlertTitle = styled.Text<TextStyle>`
  ${(props) =>
    props.fontFamily &&
    css`
      font-family: ${props.fontFamily};
    `}

  font-size: ${(props) => props.fontSize || 19}px;
  font-weight: ${(props) => props.fontWeight || 'bold'};
  color: ${(props) => props.color || '#000'};
  margin-bottom: 11px;
`;

export const AlertMessage = styled.Text<TextStyle>`
  ${(props) =>
    props.fontFamily &&
    css`
      font-family: ${props.fontFamily};
    `}

  font-size: ${(props) => props.fontSize || 17}px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => props.color || '#333'};
`;

export const AlertButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
  padding: 0px 11px;
`;

type AlertButtonProps = ButtonStyle & {
  width?: number;
};
export const AlertButton = styled.TouchableOpacity<AlertButtonProps>`
  display: flex;
  width: ${(props) => props.width || 50}%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11px;
  background: ${(props) => props.backgroundColor || '#ccc'};
  border-radius: ${(props) => props.borderRadius || 9}px;
`;

export const AlertButtonText = styled.Text<ButtonStyle>`
  ${(props) =>
    props.textStyle?.fontFamily &&
    css`
      font-family: ${props.textStyle.fontFamily};
    `}

  font-size: ${(props) => props.textStyle?.fontSize || 17}px;
  font-weight: ${(props) => props.textStyle?.fontWeight || 'normal'};
  color: ${(props) => props.textStyle?.color || '#000'};
`;
