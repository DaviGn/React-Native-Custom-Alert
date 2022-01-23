import { CustomAlertWindowParams } from './customAlertWindowsParams';

export type CustomAlertContextData = {
  isShown: boolean;
  alertParams: CustomAlertWindowParams;
  showAlert(alertParams: CustomAlertWindowParams): void;
  closeAlert(): void;
};
