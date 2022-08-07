import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ResponseContainer } from "components/StyledComponents";
import { LeftColText } from "components/StyledComponents";

function OnMonthlySubmit({ refid }) {
  return (
    <ResponseContainer maxWidth="xs">
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="body1">
        To make an automatic monthly donation, please follow these instructions.
        <br />
        <br />
        Using your Singapore Internet Banking Account, you can set a "Standing
        Instruction" to transfer to our UOB account on a monthly basis. In the
        transfer setting, please enter the above reference id in the 'Comments
        (Optional)' section.
        <br />
        <br />
        For 'Rice for Hope' monthly sponsorship, please set your transfer to
        26th of every month.
        <br />
        <br />
        For other monthly sponsorship, please set your transfer to 15th of every
        month.
        <br />
        <br />
        Please refer to these links for instructions how to set up a 'Standing
        Order'
        <br />
        <br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.dbs.com.sg/personal/support/bank-local-funds-transfer-setup-recurring-funds-transfer.html"
        >
          For DBS/POSB
        </a>
        <br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.uob.com.sg/personal/eservices/mobile/recurring-fund-transfer.page"
        >
          For UOB
        </a>
      </Typography>

      <Typography variant="body1" mt={3}>
        <b>Our Banking Details:</b>
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
    </ResponseContainer>
  );
}

export default OnMonthlySubmit;
