/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Typography from "@mui/material/Typography";

import { ResponseContainer } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";
import { strings } from "./stringConstants";
const { gvhUEN } = strings;

function OnPayNowSubmit({ refid }) {
  return (
    <ResponseContainer maxWidth="ssm">
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography data-test-id="refid" variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="h6">Global Village for Hope UEN:</Typography>
      <Typography variant="h3" mb={3}>
        {gvhUEN}
      </Typography>

      <Typography variant="h6">
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

      <PaymentConfirmation />
    </ResponseContainer>
  );
}

export default OnPayNowSubmit;
