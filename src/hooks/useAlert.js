// src/hooks/useAlert.js

import { useState } from "react";

const useAlert = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const alertMessage = (message) => {
    setAlertMsg(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMsg("");
    }, 2000); // 2초 후 메시지 사라짐
  };

  return { alertMsg, showAlert, alertMessage };
};

export default useAlert;
