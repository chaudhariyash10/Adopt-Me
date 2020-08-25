import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          <Route path="/" exact component={SearchParams} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
