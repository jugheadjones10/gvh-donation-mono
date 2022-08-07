import React from "react";
// , { useState }
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// import FullName from "../form-components/FullName"
// import Email from "../form-components/Email"
// import MobileNumber from "../form-components/MobileNumber"
// import Project from "../form-components/Project"
// import Amount from "../form-components/Amount"

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

// import AccordionActions from '@mui/material/AccordionActions';
// import Button from '@mui/material/Button';
// import HelpIcon from '@mui/icons-material/Help';

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm"

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
// const promise = loadStripe("pk_test_51I9BAdFpTxZu0TTmVNRQ0UByiNuNNRVZ1Ror0VtXcJ4blzjoDtzBZlBrZOffuuYYLyHcyPD4pzgEqMFfQpP6V0P400Q75KyijU");

function CreditCard({ classes }) {
  // const [refid, setRefid] = useState(null);

  // const formik = useFormik({
  //     initialValues: {
  //         fullname: '',
  //         email: '',
  //         mobilenumber: '',
  //         project: '',
  //         type: 'credit-card',
  //         amount: '',
  //         chequenumber: '',
  //         country: ''
  //     },
  //     validationSchema: Yup.object({
  //         fullname: Yup
  //             .string()
  //             .required('Required'),
  //         email: Yup
  //             .string()
  //             .email('Invalid email address')
  //             .required('Required'),
  //         mobilenumber: Yup
  //             .number()
  //             .typeError("Invalid mobile number")
  //             .positive("Invalid mobile number")
  //             .integer("Invalid mobile number")
  //             .required('Required'),
  //         project: Yup
  //             .string()
  //             .required('Required'),
  //         type: Yup
  //             .string(),
  //         amount: Yup
  //             .number()
  //             .typeError("Invalid donation amount"),
  //         chequenumber: Yup
  //             .number()
  //             .typeError("Invalid cheque number"),
  //         country: Yup
  //             .string(),
  //     }),
  //     onSubmit: values => {
  //         alert(JSON.stringify(values, null, 2));

  //         fetch(
  //             "https://gvh-donation-form.herokuapp.com/donation-form",
  //             {
  //                 method: 'POST',
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                     'Accept': 'text/html'
  //                 },
  //                 body: JSON.stringify(values, null, 2)
  //             }
  //         ).then(res => res.text()
  //         ).then(res => {
  //             setRefid(res)
  //         })
  //     },
  // });

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography className={classes.heading}>Credit Card Payment</Typography>
        <Typography className={classes.secondaryHeading}></Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography className={classes.normalText}>
          We are currently only accepting credit card donations for our{" "}
          <b>education bursary fund</b>. Please visit{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://give.asia/campaign/fund-raising-for-education-bursaries-in-myanmar#/"
          >
            this
          </a>{" "}
          link to proceed with payment.
        </Typography>

        {/* <Elements stripe={promise}>
                    <CheckoutForm />
                </Elements> */}
      </AccordionDetails>
    </Accordion>
  );
}

export default CreditCard;
