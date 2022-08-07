/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ResponseContainer } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";
import { LeftColText } from "components/StyledComponents";

import socketIOClient from "socket.io-client";
import { strings } from "./stringConstants";
import CircularProgress from "@mui/material/CircularProgress";
const {
  pleaseCheckEmail,
  TALLYSUCCESS,
  MOREPENDINGTHANCONFIRMED,
  ONEPENDINGANDNOCONFIRMED,
  tallySuccessMessage,
  morePendingMessage,
  onePendingMessage,
  unknownErrorMessage,
} = strings;

function OnBankTransferSubmit({ refid }) {
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
      } else if (data === ONEPENDINGANDNOCONFIRMED) {
        returnedText = onePendingMessage;
      } else {
        returnedText = unknownErrorMessage;
      }
      setReconciled(returnedText);
    });
  }, []);
  return (
    <ResponseContainer maxWidth="xs">
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="body1" mb={3}>
        Please input the above reference ID under the comments or reference
        number field of your bank transfer.
      </Typography>

      <table>
        <tr>
          <LeftColText>Bank Name:</LeftColText>
          <td>United Overseas Bank Limited</td>
        </tr>
        <tr>
          <LeftColText>Account Name:</LeftColText>
          <td>Global Village for Hope</td>
        </tr>
        <tr>
          <LeftColText>Account Number:</LeftColText>
          <td>324-310-964-5</td>
        </tr>
        <tr>
          <LeftColText>Bank Code:</LeftColText>
          <td>7375</td>
        </tr>
        <tr>
          <LeftColText>Branch Code:</LeftColText>
          <td>012 (Bukit Panjang Branch)</td>
        </tr>
      </table>

      <Typography variant="body1" mt={3}>
        <b>Additional Information for Overseas Transfers</b>
      </Typography>
      <table>
        <tr>
          <LeftColText>Currency:</LeftColText>
          <td>SGD</td>
        </tr>
        <tr>
          <LeftColText>Country:</LeftColText>
          <td>Singapore</td>
        </tr>
        <tr>
          <LeftColText>Bank Address:</LeftColText>
          <td>UOB Plaza, 80 Raffles Place</td>
        </tr>
        <tr>
          <td></td>
          <td>Singapore, 048624</td>
        </tr>
        <tr>
          <LeftColText>Bank Swift Code:</LeftColText>
          <td>UOVBSGSG</td>
        </tr>
      </table>

      <PaymentConfirmation reconciled={reconciled} />
    </ResponseContainer>
  );
}

export default OnBankTransferSubmit;
