import React from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./NoMatch.styles";

interface Props {}

const NoMatch = (props: Props) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.nomatch}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>  
    </div>
  );
};

export default NoMatch;
