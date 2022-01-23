import React, { createContext, useCallback, useContext, useState } from 'react';
import { CustomAlertContextData } from './types/customAlertContextData';
import { CustomAlertProviderProps } from './types/customAlertProviderProps';
import { CustomAlertWindowParams } from './types/customAlertWindowsParams';

const CustomAlertContext = createContext<CustomAlertContextData>(
  {} as CustomAlertContextData
);

function CustomAlertProvider({ children }: CustomAlertProviderProps) {
  const [isShown, setIsShown] = useState(false);
  const [alertParams, setAlertParams] = useState({} as CustomAlertWindowParams);

  const showAlert = useCallback((params: CustomAlertWindowParams) => {
    setAlertParams(params);
    setIsShown(true);
  }, []);

  const closeAlert = useCallback(() => {
    setIsShown(false);
  }, []);

  return (
    <CustomAlertContext.Provider
      value={{ isShown, alertParams, showAlert, closeAlert }}
    >
      {children}
    </CustomAlertContext.Provider>
  );
}

function useCustomAlert(): CustomAlertContextData {
  const context = useContext(CustomAlertContext);

  if (!context) {
    throw new Error('useCustomAlert must be used within a CustomAlertContext');
  }

  return context;
}

export { CustomAlertProvider, useCustomAlert };
