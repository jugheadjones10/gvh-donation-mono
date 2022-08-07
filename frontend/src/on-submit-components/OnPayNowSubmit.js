/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { ResponseContainer } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";

import { useTheme } from "@mui/styles";
import { strings } from "./stringConstants";

import socketIOClient from "socket.io-client";
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

function OnPayNowSubmit({ refid }) {
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
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography data-test-id="refid" variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="h6">Global Village for Hope UEN:</Typography>
      <Typography variant="h3" mb={3}>
        {gvhUEN}
      </Typography>

      <Typography variant="body1">
        Input the above UEN in your online banking app to transfer your
        donation. Under the reference number/comments field,{" "}
        <b>please key in the above reference ID.</b>
        <br />
        <br />
        Banks that support PayNow through UEN include{" "}
        <b>
          Citibank, DBS/POSB, HSBC, Maybank, OCBC, Standard Chartered and UOB
        </b>
        .
      </Typography>

      <PaymentConfirmation reconciled={reconciled} />

      {/* <img */}
      {/*   css={{ margin: theme.spacing(3) }} */}
      {/*   alt="" */}
      {/*   height="auto" */}
      {/*   width="60%" */}
      {/*   src={ */}
      {/*     process.env.NODE_ENV === "development" */}
      {/*       ? process.env.REACT_APP_DEV_SERVER + "/uenscreenshot.png" */}
      {/*       : process.env.REACT_APP_PROD_SERVER + "/uenscreenshot.png" */}
      {/*   } */}
      {/* /> */}
    </ResponseContainer>
  );
}

export default OnPayNowSubmit;
