import { createTheme } from "@material-ui/core";

const theme = createTheme({});

theme.overrides = {
  MuiCard: {
    root: {
      padding: theme.spacing(1),
    },
  },
};

export default theme;
