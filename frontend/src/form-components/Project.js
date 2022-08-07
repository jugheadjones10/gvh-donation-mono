import React from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

function Project({ className, formik }) {
  return (
    <FormControl
      variant="filled"
      margin="none"
      className={className}
      error={formik.touched.project && formik.errors.project ? true : false}
    >
      <InputLabel id="project">Project</InputLabel>
      <Select
        labelId="project"
        id="project"
        {...formik.getFieldProps("project")}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"COVID Rice Relief"}>COVID Rice Relief</MenuItem>
        <MenuItem value={"Education"}>Education</MenuItem>
        <MenuItem value={"Rice for Hope"}>Rice for Hope</MenuItem>
        <MenuItem value={"Water Well"}>Water Well</MenuItem>
        <MenuItem value={"School Improvement"}>School Improvement</MenuItem>
        <MenuItem value={"Skills Training Center in Myanmar"}>
          Skills Training Center in Myanmar
        </MenuItem>
        <MenuItem value={"Administration and Exploration"}>
          Administration and Exploration
        </MenuItem>
        <MenuItem value={"Any project that requires the most help"}>
          Any project that requires the most help
        </MenuItem>
      </Select>
      {formik.touched.project && formik.errors.project ? (
        <FormHelperText>{formik.errors.project}</FormHelperText>
      ) : (
        <FormHelperText> </FormHelperText>
      )}
    </FormControl>
  );
}

export default Project;
