import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Page from "./Components/Page";
import ContactUS from "./Components/contactus";
import TagPage from "./Components/TagFilter/TagPage";

class RouteHandler extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUS} />
          <Route exact path="/tags" component={TagPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/pages/*" component={Page} />
          <Route path="/tags" component={TagPage} />
        </Switch>
      </Router>
    );
  }
}

export default RouteHandler;
