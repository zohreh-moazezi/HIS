import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Vazirmatn", "Arial", "sans-serif"].join(","),

    h3: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#424242",
    },
  },
});

export default theme;
