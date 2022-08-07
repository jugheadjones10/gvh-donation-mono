import React from "react";

import PaymentMethod from "components/PaymentMethod";
import { NarrowBox } from "components/StyledComponents";

import Preamble from "./Preamble";

function App() {
  // const stripe = useStripe();
  // const elements = useElements();

  return (
    <NarrowBox>
      <Preamble />

      <PaymentMethod method="paynow" post={formSubmit} />
      <PaymentMethod method="qrcode" post={formSubmit} />
      <PaymentMethod method="banktransfer" post={formSubmit} />
      <PaymentMethod method="cheque" post={formSubmit} />
      <PaymentMethod method="monthly" post={formSubmit} />
      <PaymentMethod method="overseas" post={formSubmit} />
    </NarrowBox>
  );
}

// function getClientSecret(amount) {
//   return fetch("http://165.22.241.81:8000/secret", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ amount: amount }),
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (responseJson) {
//       return responseJson.client_secret;
//     })
//     .catch((err) => alert("First steP" + err));
// }

function formSubmit(values) {
  return fetch(process.env.REACT_APP_DEV_SERVER + "/donation-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/html",
    },
    body: JSON.stringify(values, null, 2),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(JSON.stringify(res));
      return { refid: res.ID, qrUrl: res.qrUrl };
    });
}

export default App;
