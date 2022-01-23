export type CustomAlertWindowParams = {
  icon?: React.ReactNode;
  title?: string;
  message: string;
  alertType?: 'Ok' | 'Confirm';
  okConfirmButtonText?: string;
  okConfirmButtonCallback(): void;
  cancelButtonText?: string;
  cancelButtonCallback?(): void;
};
