import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51JYP6bJ0vgYGBOQWTZGdEkcNXUIeB0Lq0SdSU4dlH9ZnROmzQLiOMUbkZKhckGSVVGH1tRfYEE7IwW3gQ8NsGL1N00PEYZQ9o9"
// );

import App from "./App";
const Auction = React.lazy(() => import("./auction/Auction"));

ReactDOM.render(
  <React.StrictMode>
    {/* <Elements stripe={stripePromise}> */}
    <ThemeProvider theme={createTheme(theme)}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RouteSuspense>
                <App />
              </RouteSuspense>
            }
          />
          <Route
            path="auction"
            element={
              <RouteSuspense>
                <Auction />
              </RouteSuspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    {/* </Elements> */}
  </React.StrictMode>,
  document.getElementById("root")
);

function RouteSuspense(props) {
  return (
    <Suspense
      fallback={
        <Backdrop
          css={{
            color: "#fff",
          }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      {props.children}
    </Suspense>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
