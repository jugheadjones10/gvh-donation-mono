import React from "react";
import TextField from "@mui/material/TextField";

function FullName({ className, formik }) {
  return (
    <TextField
      className={className}
      id="fullname"
      {...formik.getFieldProps("fullname")}
      label="Full name (as in NRIC)"
      variant="filled"
      error={formik.touched.fullname && formik.errors.fullname ? true : false}
      helperText={
        formik.touched.fullname && formik.errors.fullname
          ? formik.errors.fullname
          : null
      }
    />
  );
}

export default FullName;
