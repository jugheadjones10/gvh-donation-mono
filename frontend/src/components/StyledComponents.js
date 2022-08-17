/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

export function ResponseContainer(props) {
  return (
    <Box
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      {...props}
    />
  );
}

export const LeftColText = styled("td")({
  textAlign: "right",
  fontWeight: "bold",
});
