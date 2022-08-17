/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ResponseContainer } from "./StyledComponents";

//Components displayed on submission complete.
import OnPayNowSubmit from "on-submit-components/OnPayNowSubmit";
import OnQRCodeSubmit from "on-submit-components/OnQRCodeSubmit";
import OnBankTransferSubmit from "on-submit-components/OnBankTransferSubmit";
import OnChequeSubmit from "on-submit-components/OnChequeSubmit";
import OnMonthlySubmit from "on-submit-components/OnMonthlySubmit";
import OnOverseasSubmit from "on-submit-components/OnOverseasSubmit";

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
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";

import { formikInitialValues, formikValidation } from "./formik";
import { formComponents } from "./formComponents";

// Improve performance by loading only after "expand"
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PaymentMethod({ method }) {
  const config = configs[method];

  const [submitted, setSubmitted] = useState(false);
  const [renderData, setRenderData] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const handleAccordionChange = (event, isExpanded) => {
    setAccordionExpanded(isExpanded);
  };

  const formik = useFormik({
    initialValues: { ...formikInitialValues, type: method },
    validationSchema: Yup.object({
      ...formikValidation.validationObj(config.fields),
    }),
    onSubmit: (values, actions) => {
      formSubmit(values)
        .then((renderData) => {
          setRenderData(renderData);
          setSubmitted(true);
          setDialogOpen(true);
          setAccordionExpanded(false);
          formik.setSubmitting(false);
          actions.resetForm();
        })
        .catch((err) => {
          alert(
            "An error occurred: " +
              err +
              ", please contact gvhfinance@gmail.com for futher instructions!"
          );
        });
    },
  });

  return (
    <Accordion expanded={accordionExpanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">{config.title}</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <ResponseContainer
          as="form"
          id={method}
          maxWidth="ssm"
          onSubmit={formik.handleSubmit}
        >
          {config.fields.map((field) => {
            return formComponents(field, formik);
          })}

          <input id="type" type="hidden" {...formik.getFieldProps("type")} />
        </ResponseContainer>

        <Dialog
          fullScreen
          open={dialogOpen}
          onClose={handleDialogClose}
          TransitionComponent={Transition}
        >
          <ResponseContainer px={3} maxWidth="ssm">
            <Box display="flex" alignItems="flex-start" mb={3} width="100%">
              <IconButton edge="start" onClick={handleDialogClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            {submitted === true && config.response(renderData)}
            {/* {config.response({ refid: "111" })} */}
          </ResponseContainer>
        </Dialog>
      </AccordionDetails>

      <AccordionActions>
        <ResponseContainer maxWidth="ssm">
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
            sx={{ marginBottom: 3 }}
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
          <Typography color="text.secondary" variant="body2">
            By submitting this donation form, you agree that GVH may collect,
            use, and disclose your personal data, as provided above, for the
            following purposes: (a) contact you for volunteering activities (b)
            send you information on other events that GVH believes might be of
            interest or benefit to you, in accordance with the Personal Data
            Protection Act 2012.
          </Typography>
        </ResponseContainer>
      </AccordionActions>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.tooltip + 1 }}
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
