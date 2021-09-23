import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';

interface Props {};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        backgroundColor: "#f2f2f2",
    },
    list: {
        listStyleType: "none",
        width: "500px",
        margin: "0",
        display: "flex",
        justifyContent: "space-around",
    },
    link: {
        textDecoration: "none",
        marginRight: theme.spacing(2),
        fontSize: "16px",
        color: "#0b5fd6",
    },
  }));
  

const Header = (props: Props) => {
    const classes = useStyles();
    return (
        <header>
            <Card className={classes.root}>
                <ul className={classes.list}>
                    <li>
                        <Link className={classes.link} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={classes.link} to="/dogs">
                            Dogs
                        </Link>
                    </li>
                    <li>
                        <Link className={classes.link} to="/cats">
                            Cats
                        </Link>
                    </li>
                </ul>
            </Card>
        </header>
    )
}

export default Header;
