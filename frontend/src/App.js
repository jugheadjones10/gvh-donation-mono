import React from "react";

import PaymentMethod from "components/PaymentMethod";
import Preamble from "./Preamble";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box maxWidth="sm" py={10} px={2} mx="auto">
      <Box
        mb={3}
        display="flex"
        alignItems="center"
        onClick={() => {
          window.history.back();
        }}
      >
        <ArrowBackIcon sx={{ color: "text.secondary" }} />
        <Typography
          sx={{ display: "inline", ml: 1, mt: 0.4 }}
          color="text.secondary"
          variant="body1"
        >
          Back
        </Typography>
      </Box>

      <Preamble />

      <PaymentMethod method="paynow" />
      <PaymentMethod method="qrcode" />
      <PaymentMethod method="banktransfer" />
      <PaymentMethod method="cheque" />
      <PaymentMethod method="monthly" />
      <PaymentMethod method="overseas" />
    </Box>
  );
}

export default App;
