/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import { useTheme } from "@mui/styles";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

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

function FormTextField({ id, label, type, formik }) {
  return (
    <TextField
      fullWidth
      type={type}
      id={id}
      {...formik.getFieldProps(id)}
      label={label}
      variant="filled"
      margin="none"
      error={formik.touched[id] && formik.errors[id] ? true : false}
      helperText={
        formik.touched[id] && formik.errors[id] ? formik.errors[id] : " "
      }
    />
  );
}

function FormSelection({ id, label, formik, optionValues }) {
  return (
    <FormControl
      fullWidth
      variant="filled"
      margin="none"
      error={formik.touched.project && formik.errors.project ? true : false}
    >
      <InputLabel id={id + "label"}>{label}</InputLabel>
      <Select labelId={id + "label"} id={id} {...formik.getFieldProps(id)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {optionValues.map((value, index) => (
          <MenuItem data-test-id={id + value} key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      {formik.touched.project && formik.errors[id] ? (
        <FormHelperText>{formik.errors[id]}</FormHelperText>
      ) : (
        <FormHelperText> </FormHelperText>
      )}
    </FormControl>
  );
}
