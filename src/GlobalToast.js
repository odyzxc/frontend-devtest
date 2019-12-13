import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

import { getToastState } from "./selectors";
import { hideToast } from "./actions";

const GlobalToast = () => {
  const { message, title, visible } = useSelector(getToastState);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0
      }}
    >
      <Toast
        show={visible}
        onClose={() => dispatch(hideToast())}
        delay={1500}
        autohide
      >
        <ToastHeader>{title}</ToastHeader>
        <ToastBody>{message}</ToastBody>
      </Toast>
    </div>
  );
};

export default GlobalToast;
