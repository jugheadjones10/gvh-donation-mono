import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Stripe = () => (
  <Box>
    <Button
      size="large"
      sx={{ textTransform: "none", marginRight: 2 }}
      variant="contained"
      href="https://buy.stripe.com/fZe9BB8uyaMw0Cs288"
      target="_blank"
    >
      Make a recurring donation
    </Button>
    <Button
      size="large"
      sx={{ textTransform: "none" }}
      variant="contained"
      href="https://donate.stripe.com/9AQ5ll9yC7Ak5WM4gh"
      target="_blank"
    >
      Make a one-time donation
    </Button>
  </Box>
);
export default Stripe;
