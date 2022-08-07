import React from "react";
import TextField from "@mui/material/TextField";

function MobileNumber({ className, formik }) {
  return (
    <TextField
      className={className}
      id="mobilenumber"
      {...formik.getFieldProps("mobilenumber")}
      label="Mobile Number"
      variant="filled"
      error={
        formik.touched.mobilenumber && formik.errors.mobilenumber ? true : false
      }
      helperText={
        formik.touched.mobilenumber && formik.errors.mobilenumber
          ? formik.errors.mobilenumber
          : null
      }
    />
  );
}

export default MobileNumber;
