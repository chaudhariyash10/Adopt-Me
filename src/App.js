import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>

      <Router>
        <Route path="/" exact component={SearchParams} />
        <Route path="/details/" component={Details} />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
