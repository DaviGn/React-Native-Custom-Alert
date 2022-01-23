import React from 'react';

export type TextStyle = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
};

export type ButtonStyle = {
  textStyle?: TextStyle;
  defaultText?: string;
  borderRadius?: number;
  backgroundColor?: string;
};

export type CustomAlertProps = {
  defaultIcon?: React.ReactNode;
  generalFontStyle?: TextStyle;
  titleStyle?: TextStyle;
  messageStyle?: TextStyle;

  okConfirmButtonStyle?: ButtonStyle;
  cancelButtonStyle?: ButtonStyle;
  transationDuration?: number;
};
