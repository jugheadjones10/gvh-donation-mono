import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { strings } from "./stringConstants";
const {
  TALLYSUCCESS,
  MOREPENDINGTHANCONFIRMED,
  NOCONFIRMED,
  tallySuccessMessage,
  morePendingMessage,
  noConfirmedMessage,
  unknownErrorMessage,
} = strings;

export default function useSocketIO() {
  const [reconciled, setReconciled] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_DEV_SERVER);
    socket.on("update", (data) => {
      console.log("Socket update: ", data);
      let returnedText;
      if (data === TALLYSUCCESS) {
        returnedText = tallySuccessMessage;
      } else if (data === MOREPENDINGTHANCONFIRMED) {
        returnedText = morePendingMessage;
      } else if (data === NOCONFIRMED) {
        returnedText = noConfirmedMessage;
      } else {
        returnedText = unknownErrorMessage;
      }
      setReconciled(returnedText);
    });
    return () => socket.disconnect();
  }, []);

  return reconciled;
}
