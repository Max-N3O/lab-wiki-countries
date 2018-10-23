import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/countriesList";
import CountryDetail from "./components/countryDetail";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <Link to="/" class="navbar-brand" >
              WikiCountries
            </Link>
          </div>
        </nav>

        <div class="row">
          <div class="col-5">
            <List />
          </div>

          <div class="col-7">
           {/* Switch: If this show this, if that show that */}
            <Switch>
              {/* After : --> props.match.params.toto, toto getting info from the component */}
              {/* When you type anything after /, render the component 'CountryDetail', whatever this component is (see countryDetail.js) */}
              <Route exact path="/:toto" component={CountryDetail} />
              {/* <Route exact path=":id" component={ProjectDetails} /> */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
