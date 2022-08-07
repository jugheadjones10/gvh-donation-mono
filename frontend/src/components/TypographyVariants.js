import React from "react";

import Typography from "@mui/material/Typography";

export function Title(props) {
  return (
    <Typography
      fontSize={{
        md: "h3.fontSize",
        xs: "h4.fontSize",
      }}
      fontFamily="CooperHewitt-Semibold"
      align="center"
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export function AccordionTitle(props) {
  return (
    <Typography
      fontSize="h6.fontSize"
      fontFamily="Fira Sans"
      fontWeight={300}
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export function BodyText(props) {
  return (
    <Typography
      fontSize="h6.fontSize"
      fontFamily="Fira Sans"
      fontWeight={400}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
