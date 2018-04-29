import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import Root from "./components/Root"
import Products from "./components/Products"
import ProductItem from "./components/ProductItem"

import {Router, Route, browserHistory, IndexRoute} from "react-router";



class App extends Component {


  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
            <Route path={"home"} component={Home} />
            <Route path={"products"} component={Products} />
        </Route>
      </Router>
    );
  }
}

export default App;
