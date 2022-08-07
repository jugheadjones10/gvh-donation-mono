import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ResponseContainer } from "components/StyledComponents";

function OnOverseasSubmit() {
  return (
    <ResponseContainer maxWidth="xs">
      <Typography>
        We will be contacting you by email, Whatsapp, or phone to explain how to
        donate.
      </Typography>
    </ResponseContainer>
  );
}

export default OnOverseasSubmit;
