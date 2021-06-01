import { StepLabel } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3E43D3",
      almostBlack: "#31333C",
      darkGrey: "#636363",
      mediumGrey: "#C4C4C4",
      lightGrey: "#ECECEC",
      almostWhite: "#FCFCFC",
      mainDark: "#232558",
      primary: "#5355BD",
      secondary: "#E06C00",
    },
    error: {
      main: "#FF6C8D",
    },
    background: {
      default: "#FCFCFC",
    },
  },
  space: {
    xxs: "10px",
    xs: "15px",
    s: "20px",
    m: "30px",
    l: "40px",
    xl: "50px",
  },
  radius: {
    xxs: "10px",
    xs: "15px",
    s: "20px",
    m: "30px",
    l: "40px",
    xl: "50px",
  },
  breakpoints: {
    navbar: "700px",
  },
  spacing: [0, 4, 8, 16, 32, 64],
  fonts: {
    body: '"Crimson Text", serif',
    label: "'Montserrat', sans-serif",
    headings: '"Abril Fatface", cursive',
  },
  typography: {
    fontFamily: '"Crimson Text", serif',
    fontSize: 18,
    lineHeight: 1.6,
    h1: {
      fontFamily: '"Abril Fatface", cursive',
      fontSize: 50,
    },
    h2: {
      fontFamily: '"Abril Fatface", cursive',
      fontSize: 40,
    },
    h3: {
      fontFamily: '"Abril Fatface", cursive',
      fontSize: 30,
    },
    h4: {
      fontFamily: '"Abril Fatface", cursive',
      fontSize: 25,
    },
    h5: {
      fontWeight: 600,
      fontSize: 22,
    },
    h5: {
      fontWeight: 600,
      fontSize: 20,
    },
  },
});

export default theme;
