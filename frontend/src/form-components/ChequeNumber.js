import React from "react";
import TextField from "@mui/material/TextField";

function ChequeNumber({ className, formik }) {
  return (
    <TextField
      className={className}
      id="chequenumber"
      {...formik.getFieldProps("chequenumber")}
      label="Cheque Number"
      variant="filled"
      error={
        formik.touched.chequenumber && formik.errors.chequenumber ? true : false
      }
      helperText={
        formik.touched.chequenumber && formik.errors.chequenumber
          ? formik.errors.chequenumber
          : null
      }
    />
  );
}

export default ChequeNumber;
