/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { BodyText } from "components/TypographyVariants";

import Box from "@mui/material/Box";

function Preamble() {
  return (
    <Box mb={10}>
      <BodyText>
        Thank you so much for your interest in funding our various projects!
        <br />
        <br />
        This information will allow us to record the source of the funds
        accurately and use them for their intended purpose. <br />
        Your information will not be published publicly without your permission
        and your identity will be kept confidential. <br />
        <br />
        Feel free to email us at
        <a
          css={{
            textDecoration: "none",
            color: "black",
          }}
          href="mailto:Globalvillageforhope@gmail.com"
        >
          <b css={{ fontWeight: 600 }}> Globalvillageforhope@gmail.com </b>
        </a>
        or Whatsapp us at <b css={{ fontWeight: 600 }}>+65 88224918</b> if you
        would like to seek clarifications. <br />
      </BodyText>
    </Box>
  );
}
export default Preamble;
