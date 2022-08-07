/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Typography from "@mui/material/Typography";
import { formComponentsStyles } from "./FormComponents";

import { useTheme } from "@mui/styles";

function PDPA() {
  const theme = useTheme();

  return (
    <Typography color="text.secondary" variant="body2">
      By submitting this donation form, you agree that GVH may collect, use, and
      disclose your personal data, as provided above, for the following
      purposes: (a) contact you for volunteering activities (b) send you
      information on other events that GVH believes might be of interest or
      benefit to you, in accordance with the Personal Data Protection Act 2012.
    </Typography>
  );
}

export default PDPA;
