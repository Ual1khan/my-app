import React from 'react'
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';

interface Props {};

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 0,
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
        color: theme.palette.text.primary,
        "&.active": {
            color: theme.palette.primary.main,
        },
    },
  }));
  

const Header = (props: Props) => {
    const classes = useStyles();
    return (
        <header>
            <Card className={classes.root}>
                <ul className={classes.list}>
                    <li>
                        <NavLink exact activeClassName="active" className={classes.link} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" className={classes.link} to="/dogs">
                            Dogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" className={classes.link} to="/cats">
                            Cats
                        </NavLink>
                    </li>
                </ul>
            </Card>
        </header>
    )
}

export default Header;
