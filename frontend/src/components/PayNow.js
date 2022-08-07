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
// import HelpIcon from '@mui/icons-material/Help';

function PayNow({
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
        <Typography className={classes.heading}>PayNow with UEN</Typography>
        <Typography className={classes.secondaryHeading}></Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {refid === null && (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.container}
            id="paynowform"
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
            <Typography
              className={classes.largeText}
              style={{ marginBottom: "20px" }}
            >
              {refid}
            </Typography>

            <Typography className={classes.normalText}>
              PayNow to this UEN :
            </Typography>
            <Typography
              className={classes.largeText}
              style={{ marginBottom: "20px" }}
            >
              53382503B
            </Typography>

            <Typography className={classes.normalText}>
              Please enter your Reference ID when sending through PayNow so that
              we can identify you.
            </Typography>
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
            form="paynowform"
          >
            Submit
          </Button>
        </AccordionActions>
      )}
    </Accordion>
  );
}

export default PayNow;
