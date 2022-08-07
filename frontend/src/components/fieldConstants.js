import React from "react";
import * as Yup from "yup";
import {
  FormTextField,
  FormSelection,
} from "../form-components/FormComponents";

export const formikInitialValues = {
  fullname: "",
  email: "",
  mobilenumber: "",
  project: "",
  amount: "",
  chequenumber: "",
  country: "",
};

export const formikValidation = {
  type: Yup.string().required("Required"),
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobilenumber: Yup.number()
    .typeError("Invalid mobile number")
    .positive("Invalid mobile number")
    .integer("Invalid mobile number")
    .required("Required"),
  project: Yup.string().required("Required"),
  amount: Yup.number()
    .typeError("Invalid donation amount")
    .positive("Invalid mobile number")
    .required("Required"),
  validationObj: function (fieldArray) {
    const finalObj = {};
    fieldArray.forEach((x) => {
      finalObj[x] = this[x];
    });
    return finalObj;
  },
};

export function formComponents(field, formik) {
  function formTextField(id, label, type) {
    return <FormTextField id={id} label={label} type={type} formik={formik} />;
  }
  const obj = {
    fullname: formTextField("fullname", "Full name (as in NRIC)", "text"),
    email: formTextField("email", "Email", "email"),
    mobilenumber: formTextField("mobilenumber", "Mobile Number", "tel"),
    project: (
      <FormSelection
        id="project"
        label="Project"
        formik={formik}
        optionValues={[
          "COVID Rice Relief",
          "Education",
          "Rice for Hope",
          "Water Well",
          "School Improvement",
          "Skills Training Center in Myanmar",
          "Administration and Exploration",
          "Any project that requires the most help",
        ]}
      />
    ),
    amount: formTextField("amount", "Donation Amount", "number"),
    chequenumber: formTextField("chequenumber", "Cheque Number", "text"),
    country: "",
  };

  return obj[field];
}
