import { createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    myButton: {
      backgroundColor: purple[300],
      color: "black",
      border: "2px solid black",
    },
  },
});
