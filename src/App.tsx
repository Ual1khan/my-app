import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";
import Home from "./pages/Home/Home";
import DogBreed from "./components/DogBreed/DogBreed";

import useStyles from "./App.styles";
import theme from "./theme";
import CollapsedBreadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <CollapsedBreadcrumbs />
          <div className={classes.container}>
            <Switch>
              <Route exact path="/dogs" component={Dogs} />
              <Route path="/dogs/:breed">
                <DogBreed />
              </Route>
              <Route exact path="/cats">
                <Cats />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
