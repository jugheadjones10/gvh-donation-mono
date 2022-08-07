/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ResponseContainer } from "./StyledComponents";
import { AccordionTitle } from "components/TypographyVariants";

//Components displayed on submission complete.
import OnPayNowSubmit from "on-submit-components/OnPayNowSubmit";
import OnQRCodeSubmit from "on-submit-components/OnQRCodeSubmit";
import OnBankTransferSubmit from "on-submit-components/OnBankTransferSubmit";
import OnChequeSubmit from "on-submit-components/OnChequeSubmit";
import OnMonthlySubmit from "on-submit-components/OnMonthlySubmit";
import OnOverseasSubmit from "on-submit-components/OnOverseasSubmit";

import PDPA from "../form-components/PDPA";

import { useTheme } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import {
  formikInitialValues,
  formikValidation,
  formComponents,
} from "./fieldConstants";

function PaymentMethod({ method, post }) {
  const [submitted, setSubmitted] = useState(false);
  const [renderData, setRenderData] = useState(null);
  const config = configs[method];
  const theme = useTheme();

  const formik = useFormik({
    initialValues: { ...formikInitialValues, type: method },
    validationSchema: Yup.object({
      ...formikValidation.validationObj(config.fields),
    }),
    onSubmit: (values) => {
      post(values)
        .then((renderData) => {
          setRenderData(renderData);
          setSubmitted(true);
          formik.setSubmitting(false);
        })
        .catch((err) => {
          alert("My client error: " + err);
        });
    },
  });

  return (
    <Accordion css={{ zIndex: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <AccordionTitle>{config.title}</AccordionTitle>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {submitted === false && (
          <ResponseContainer
            as="form"
            id={method}
            maxWidth="xs"
            onSubmit={formik.handleSubmit}
          >
            {config.fields.map((field) => {
              return formComponents(field, formik);
            })}

            <input id="type" type="hidden" {...formik.getFieldProps("type")} />
          </ResponseContainer>
        )}

        {submitted === true && config.response(renderData)}
        {/* {config.response({ refid: "111", qrUrl: "www.google.com" })} */}
      </AccordionDetails>

      {submitted === false && (
        <AccordionActions>
          <ResponseContainer maxWidth="xs">
            <Tooltip
              arrow
              placement="top"
              title="Information from the form will allow us to record the source of the funds accurately and use them for their intended purpose. Your information will not be published publicly without your permission and your identity will be kept confidential."
            >
              <Typography variant="body2">
                <IconButton>
                  <HelpIcon />
                </IconButton>
                Why do we need this information?
              </Typography>
            </Tooltip>
            <Button
              color="primary"
              css={{ marginBottom: theme.spacing(3) }}
              disabled={formik.isSubmitting}
              form={method}
              fullWidth
              size="medium"
              type="submit"
              variant="contained"
              data-test-id={method + "button"}
            >
              Submit
            </Button>
            <PDPA />
          </ResponseContainer>
        </AccordionActions>
      )}
      <Backdrop
        css={{
          color: "#fff",
          zIndex: 3,
        }}
        open={formik.isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Accordion>
  );
}

const configs = {
  paynow: {
    title: "PayNow with UEN",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnPayNowSubmit refid={renderData.refid} />,
  },
  qrcode: {
    title: "PayLah/PayAnyone with QR Code",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => (
      <OnQRCodeSubmit qrUrl={renderData.qrUrl} refid={renderData.refid} />
    ),
  },
  banktransfer: {
    title: "Bank Transfer",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnBankTransferSubmit refid={renderData.refid} />,
  },
  cheque: {
    title: "Cheque",
    fields: [
      "fullname",
      "email",
      "mobilenumber",
      "project",
      "amount",
      "chequenumber",
    ],
    response: (renderData) => <OnChequeSubmit refid={renderData.refid} />,
  },
  monthly: {
    title: "Automatic Monthly Donation",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnMonthlySubmit refid={renderData.refid} />,
  },
  overseas: {
    title: "Overseas Donation",
    fields: [
      "fullname",
      "email",
      "mobilenumber",
      "project",
      "amount",
      "country",
    ],
    response: (renderData) => <OnOverseasSubmit refid={renderData.refid} />,
  },
  paynowpaintings: {
    title: "PayNow with UEN",
    fields: ["fullname", "email", "mobilenumber", "amount"],
    response: (renderData) => <OnPayNowSubmit refid={renderData.refid} />,
  },
  qrcodepaintings: {
    title: "PayLah/PayAnyone with QR Code",
    fields: ["fullname", "email", "mobilenumber", "amount"],
    response: (renderData) => (
      <OnQRCodeSubmit qrUrl={renderData.qrUrl} refid={renderData.refid} />
    ),
  },
};

export default PaymentMethod;
