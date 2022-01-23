export type CustomAlertWindowParams = {
  icon?: React.ReactNode;
  title?: string;
  message: string;
  alertType?: 'Ok' | 'Confirm';
  okConfirmButtonCallback(): void;
  cancelButtonCallback?(): void;
};
