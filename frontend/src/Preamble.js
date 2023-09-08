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
        The payment methods below will incur a 3.4% transaction fee (we will
        receive a bit less than what you donated). If you would like to donate
        without paying the transaction fee, please contact us directly:
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
      </Typography>
    </Box>
  );
}
export default Preamble;
