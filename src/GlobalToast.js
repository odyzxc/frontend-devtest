import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

import { getToastState } from './selectors';
import { hideToast } from './actions';

const GlobalToast = () => {
  const { message, title, visible } = useSelector(getToastState);
  const dispatch = useDispatch();
  return (
    <Toast show={visible} onClose={() => dispatch(hideToast())}>
      <ToastHeader>{title}</ToastHeader>
      <ToastBody>{message}</ToastBody>
    </Toast>
  );
};

export default GlobalToast;
