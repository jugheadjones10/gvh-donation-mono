/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

function Preamble() {
  return (
    <Box mb={10}>
      <Typography variant="h6">
        Thank you so much for your interest in funding our various projects!
        <br />
        <br />
        If you would like to donate without paying a transaction fee (by using
        direct PayNow to our Singapore bank account), please contact us
        directly:
        <br />
        <br />
        Email:
        <br />
        <a href="mailto:gvhfinance@gmail.com">
          <b> Globalvillageforhope@gmail.com </b>
        </a>
        <br />
        <br />
        Whatsapp/Phone:
        <br />
        <b>+65 88224918</b>
        <br />
        <br />
        If you prefer to donate using your credit card or debit card, please
        proceed with this donation form by clicking one of the 2 buttons below:
      </Typography>
    </Box>
  );
}
export default Preamble;
