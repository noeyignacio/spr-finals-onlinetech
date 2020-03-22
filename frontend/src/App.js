import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Dashboard from "./components/Dashboard";
import Header from "./components/layouts/Header";
import AddGenre from "./components/data/AddGenre";
import UpdateGenre from "./components/data/UpdateGenre";

// React Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/addGenre" component={AddGenre} />
            <Route exact path="/updateGenre/:id" component={UpdateGenre} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
