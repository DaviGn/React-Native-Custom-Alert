import React, { useCallback } from 'react';
import { useCustomAlert } from '.';
import CustomAlertWindow from './customAlertWindow';
import { ModalBackground } from './styles';
import { CustomAlertProps } from './types/customAlertProps';

export default function CustomAlert({ ...params }: CustomAlertProps) {
  const { isShown, closeAlert } = useCustomAlert();

  const handleModalClose = useCallback(() => {
    closeAlert();
    return true;
  }, [closeAlert]);

  return (
    <>
      <ModalBackground
        isShown={isShown}
        onStartShouldSetResponder={handleModalClose}
      />
      <CustomAlertWindow {...params} />
    </>
  );
}
