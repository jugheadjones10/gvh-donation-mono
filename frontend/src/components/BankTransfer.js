import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FullName from "../form-components/FullName";
import Email from "../form-components/Email";
import MobileNumber from "../form-components/MobileNumber";
import Project from "../form-components/Project";
import Amount from "../form-components/Amount";
import PDPA from "../form-components/PDPA";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function BankTransfer({
  classes,
  formikInitialValues,
  formikValidation,
  fetchFromFormServer,
}) {
  const [refid, setRefid] = useState(null);

  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: Yup.object({
      ...formikValidation,
      amount: Yup.number().typeError("Invalid donation amount"),
      chequenumber: Yup.number(),
      country: Yup.string(),
    }),
    onSubmit: (values) => {
      fetchFromFormServer(values)
        .then((res) => res.text())
        .then((res) => {
          setRefid(res);
        });
    },
  });

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography className={classes.heading}>Bank Transfer</Typography>
        <Typography className={classes.secondaryHeading}></Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {refid === null && (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.container}
            id="banktransferform"
          >
            <FullName className={classes.textField} formik={formik} />
            <Email className={classes.textField} formik={formik} />
            <MobileNumber className={classes.textField} formik={formik} />
            <Project className={classes.textField} formik={formik} />

            <input type="hidden" id="type" {...formik.getFieldProps("type")} />

            <Amount className={classes.textField} formik={formik} />

            <input
              type="hidden"
              id="chequenumber"
              {...formik.getFieldProps("chequenumber")}
            />
            <input
              type="hidden"
              id="country"
              {...formik.getFieldProps("country")}
            />

            <PDPA classes={classes} />
          </form>
        )}

        {refid !== null && (
          <div className={classes.container}>
            <Typography className={classes.normalText}>
              Here is your Reference ID :
            </Typography>
            <Typography className={classes.largeText}>{refid}</Typography>
            <Typography
              className={classes.normalText}
              style={{ marginBottom: "20px" }}
            >
              Please enter your Reference ID when making the transfer.
            </Typography>

            <div className={classes.textContainer}>
              <Typography className={classes.normalText}>
                <b>Bank Name:</b> United Overseas Bank Limited
              </Typography>
              <Typography className={classes.normalText}>
                <b>Account Name:</b> Global Village for Hope
              </Typography>
              <Typography className={classes.normalText}>
                <b>Account Number:</b> 324-310-964-5
              </Typography>
              <Typography className={classes.normalText}>
                <b>Bank Code:</b> 7375
              </Typography>
              <Typography
                className={classes.normalText}
                style={{ marginBottom: "20px" }}
              >
                <b>Branch Code:</b> 012 (Bukit Panjang Branch)
              </Typography>

              <Typography className={classes.normalText}>
                <b>Additional Info for Overseas Transfers</b>
              </Typography>
              <Typography className={classes.normalText}>
                <b>Currency:</b> SGD
              </Typography>
              <Typography className={classes.normalText}>
                <b>Country:</b> Singapore{" "}
              </Typography>
              <Typography className={classes.normalText}>
                <b>Bank Address:</b> UOB Plaza, 80 Raffles Place, Singapore
                048624
              </Typography>
              <Typography className={classes.normalText}>
                <b>Bank Swift Code:</b> UOVBSGSG
              </Typography>
            </div>
          </div>
        )}
      </AccordionDetails>

      {refid === null && (
        <AccordionActions className={classes.container}>
          <Button
            style={{ marginBottom: "20px" }}
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
            form="banktransferform"
          >
            Submit
          </Button>
        </AccordionActions>
      )}
    </Accordion>
  );
}

export default BankTransfer;
