import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
          </header>
        <Route path="/" exact component={SearchParams} />
        <Route path="/details/" component={Details} />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
