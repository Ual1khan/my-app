import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.text.primary,
    textTransform: "uppercase",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  list: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  }
}));

export default useStyles;
