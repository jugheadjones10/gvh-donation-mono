/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";

import React from "react";
import Typography from "@mui/material/Typography";

import { ResponseContainer, LeftColText } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";

function OnBankTransferSubmit({ refid }) {
  return (
    <ResponseContainer maxWidth="ssm">
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="h6" mb={3}>
        Please input the above reference ID under the comments or reference
        number field of your bank transfer.
      </Typography>

      <Typography variant="body1" mb={3}>
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
      </Typography>

      <Typography variant="body1">
        <b>Additional Information for Overseas Transfers</b>
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
      </Typography>

      <PaymentConfirmation />
    </ResponseContainer>
  );
}

export default OnBankTransferSubmit;
