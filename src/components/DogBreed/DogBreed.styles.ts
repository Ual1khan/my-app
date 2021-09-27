import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageDiv: {
    width: "320px",
  },
  breed: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  img: {
      width: "100%",
      objectFit: "contain",
  },
  media: {
      display: "flex",
      width: "1024px",
      margin: "0 auto",
      justifyContent: "space-between",
  }
}));

export default useStyles;
