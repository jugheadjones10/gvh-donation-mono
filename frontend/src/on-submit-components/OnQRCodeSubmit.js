/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Typography from "@mui/material/Typography";

import { ResponseContainer } from "components/StyledComponents";
import PaymentConfirmation from "./PaymentConfirmation";
import paynowapps from "./paynowapps.png";

function OnQRCodeSubmit({ refid, qrUrl }) {
  return (
    <ResponseContainer maxWidth="ssm">
      <Typography variant="h6">
        Using any of the following banking apps, scan the QR code below and key
        in your donation amount. If you are using your phone, take a screenshot
        of the QR code and upload it within your banking app.
      </Typography>

      <img
        src={paynowapps}
        width="60%"
        css={(theme) => {
          return {
            marginTop: theme.spacing(3),
          };
        }}
        alt=""
      ></img>
      <img
        src={qrUrl}
        width="60%"
        css={(theme) => {
          return {
            marginBottom: theme.spacing(3),
          };
        }}
        alt=""
      ></img>

      <PaymentConfirmation />
    </ResponseContainer>
  );
}

export default OnQRCodeSubmit;
