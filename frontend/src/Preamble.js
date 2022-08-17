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
        Feel free to email us at
        <a href="mailto:gvhfinance@gmail.com">
          <b> Globalvillageforhope@gmail.com </b>
        </a>
        or Whatsapp us at <b>+65 88224918</b> if you would like to seek
        clarifications. <br />
      </Typography>
    </Box>
  );
}
export default Preamble;
