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
import Divider from "@mui/material/Divider";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";

function Monthly({
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
        <Typography className={classes.heading}>
          Automatic Monthly Donation
        </Typography>
        <Typography className={classes.secondaryHeading}></Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {refid === null && (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.container}
            id="monthlyform"
          >
            <FullName className={classes.textField} formik={formik} />
            <Email className={classes.textField} formik={formik} />
            <MobileNumber className={classes.textField} formik={formik} />
            <Project className={classes.textField} formik={formik} />

            <input type="hidden" id="type" {...formik.getFieldProps("type")} />

            <Amount
              className={classes.textField}
              formik={formik}
              label="Montly Donation Amount"
            />

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
          <Typography className={classes.normalText}>
            To make an automatic monthly donation, please follow these
            instructions.
            <br />
            <br />
            Using your Singapore Internet Banking Account, you can set a
            "Standing Instruction" to transfer to our UOB account on a monthly
            basis.
            <br />
            <br />
            In the transfer setting, please enter the above reference id in the
            'Comments (Optional)' section.
            <br />
            <br />
            For 'Rice for Hope' monthly sponsorship, please set your transfer to
            26th of every month.
            <br />
            <br />
            For other monthly sponsorship, please set your transfer to 15th of
            every month.
            <br />
            <br />
            Please refer to these links for instructions how to set up a
            'Standing Order'
            <br />
            <br />
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.dbs.com.sg/personal/support/bank-local-funds-transfer-setup-recurring-funds-transfer.html"
            >
              For DBS/POSB
            </a>
            <br />
            <br />
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.uob.com.sg/personal/eservices/mobile/recurring-fund-transfer.page"
            >
              For UOB
            </a>
            <br />
            <br />
            Our Banking Details are:
            <br />
            <br />
            <b>Bank Name:</b> United Overseas Bank Limited
            <br />
            <b>Account Name:</b> Global Village for Hope <br />
            <b>Account Number:</b> 324-310-964-5
            <br />
            <b>Bank Code:</b> 7375
            <br />
            <b>Branch Code:</b> 012 (Bukit Panjang Branch)
          </Typography>
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
            form="monthlyform"
          >
            Submit
          </Button>
        </AccordionActions>
      )}
    </Accordion>
  );

  // return (
  //     <Accordion>
  //         <AccordionSummary
  //             expandIcon={<ExpandMoreIcon />}
  //             id="panel1a-header">

  //             <Typography className={classes.heading}>Automatic Monthly Donation</Typography>
  //             <Typography className={classes.secondaryHeading}></Typography>

  //         </AccordionSummary>
  //         <Divider />
  //         <AccordionDetails>

  //             <Typography className={classes.normalText}>
  //                 To make an automatic monthly donation, please follow these instructions.
  //                 <br /><br />
  //                 Using your Singapore Internet Banking Account, you can set a "Standing Instruction" to transfer to our UOB account on a monthly basis.
  //                 <br /><br />
  //                 For 'Rice for Hope' monthly sponsorship, please set your transfer to 26th of every month. In the transfer setting, please leave in the 'Comments (Optional)' section a message in this format [name][sacks of rice].
  //                 <br /><br />
  //                 For example "JohnLim2xRice" which indicates that this transfer is from "John Lim" and it is for "2 sacks of rice".
  //                 <br /><br />
  //                 For other monthly sponsorship, please set your transfer to 15th of every month. In the transfer setting, please leave in the 'Comments (Optional)' section a message in this format [name][project name].
  //                 <br /><br />
  //                 For example,
  //                 <br /><br />
  //                 "JohnLim Bursary"<br />
  //                 "JohnLim Uniform"<br />
  //                 "JohnLim Stationery"<br />
  //                 "JohnLim Water"<br />
  //                 "JohnLim Solar"<br />
  //                 "JohnLim General"
  //                 <br /><br />
  //                 This will help us to track who made the donation and for which purpose.
  //                 <br /><br />
  //                 Please refer to these links for instructions how to set up a 'Standing Order'
  //                 <br /><br />
  //                 <a
  //                     rel="noreferrer"
  //                     target="_blank"
  //                     href="https://www.dbs.com.sg/personal/support/bank-local-funds-transfer-setup-recurring-funds-transfer.html">
  //                     For DBS/POSB
  //                 </a>
  //                 <br /><br />
  //                 <a
  //                     rel="noreferrer"
  //                     target="_blank"
  //                     href="https://www.uob.com.sg/personal/eservices/mobile/recurring-fund-transfer.page">
  //                     For UOB
  //                 </a>
  //                 <br /><br />
  //                 Our Banking Details are:
  //                 <br /><br />
  //                 <b>Bank Name:</b> United Overseas Bank Limited<br />
  //                 <b>Account Name:</b> Global Village for Hope <br />
  //                 <b>Account Number:</b> 324-310-964-5<br />
  //                 <b>Bank Code:</b> 7375<br />
  //                 <b>Branch Code:</b> 012 (Bukit Panjang Branch)
  //             </Typography>

  //         </AccordionDetails>

  //     </Accordion >
  // );
}

export default Monthly;
