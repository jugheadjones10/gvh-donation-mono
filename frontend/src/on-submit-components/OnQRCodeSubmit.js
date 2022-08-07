/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

// import {Container, containerCss} from "../payment-methods/StyledComponents";
import CircularProgress from "@mui/material/CircularProgress";
import { ResponseContainer } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";
import paynowapps from "./paynowapps.png";

import { useTheme } from "@mui/styles";

import socketIOClient from "socket.io-client";

import { strings } from "./stringConstants";
const {
  gvhUEN,
  pleaseCheckEmail,
  TALLYSUCCESS,
  MOREPENDINGTHANCONFIRMED,
  NOCONFIRMED,
  tallySuccessMessage,
  morePendingMessage,
  noConfirmedMessage,
  unknownErrorMessage,
} = strings;

function OnQRCodeSubmit({ refid, qrUrl }) {
  const theme = useTheme();
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
  }, []);

  return (
    <ResponseContainer maxWidth="xs">
      <Typography variant="body1">
        Using any of the following banking apps, scan the QR code below and key
        in your donation amount. If you are using your phone, take a screenshot
        of the QR code and upload it within your banking app.
      </Typography>

      <img
        src={paynowapps}
        width="60%"
        css={{ marginTop: theme.spacing(3) }}
        alt=""
      ></img>
      <img
        src={qrUrl}
        width="60%"
        css={{ marginBottom: theme.spacing(3) }}
        alt=""
      ></img>

      <PaymentConfirmation reconciled={reconciled} />
    </ResponseContainer>
  );
}

export default OnQRCodeSubmit;
