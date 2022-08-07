/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import styled from "@emotion/styled";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// export function ResponseContainer(props) {
//   return <CenteredContainer {...props} />;
// }

export function ResponseContainer(props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...props} />
  );
}

export const LeftColText = styled.td({
  textAlign: "right",
  fontWeight: "bold",
});

export function NarrowBox(props) {
  return (
    <Box {...props} maxWidth="sm" my={10} mx="auto">
      {props.children}
    </Box>
  );
}
