import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "League Spartan",
      "Segoe UI",
      "Candara",
      "Bitstream Vera Sans",
      "DejaVu Sans",
      "Bitstream Vera Sans",
      "Trebuchet MS",
      "Verdana",
      "Verdana Ref",
      "sans-serif",
    ].join(","),
  },
  breakpoints: {
    values: {
      ssm: 400,
    },
  },
  palette: {
    primary: {
      main: "#64291B",
      light: "#775F55",
    },
    secondary: {
      main: "#C7D392",
      dark: "#A5AB81",
    },
  },
});

//GVH color palette
//Light green #C7D392 Y
//Light blue #DAEDF1
//
//Dark brown #64291B Y
//Light brown #775F55 Y
//
//Skin #EBDDC3
//Light blue #94B6D2
//Orange #DD8047
//Dark green #A5AB81 Y
//Shady yellow #D8B25C

export default theme;
