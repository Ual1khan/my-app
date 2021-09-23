import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Dogs from './pages/Dogs/Dogs';
import Cats from './pages/Cats/Cats';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dogs">
            <Dogs />
          </Route>
          <Route path="/cats">
            <Cats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
