import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ResponseContainer } from "components/StyledComponents";

function OnChequeSubmit({ refid }) {
  return (
    <ResponseContainer maxWidth="xs">
      <Typography>
        Kindly drop the cheque off at any UOB Branch and include the GVH account
        number <b>(324-310-964-5)</b> on the back of the cheque.
      </Typography>
    </ResponseContainer>
  );
}

export default OnChequeSubmit;
