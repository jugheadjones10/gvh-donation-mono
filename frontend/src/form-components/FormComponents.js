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

export const formComponentsStyles = function (theme) {
  return {
    marginTop: "5px",
    marginBottom: "5px",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  };
};

export function FormTextField({ id, label, type, formik }) {
  const theme = useTheme();
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

export function FormSelection({ id, label, formik, optionValues }) {
  const theme = useTheme();
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
