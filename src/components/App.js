import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage/homepage";
import Contact from "./Contacts/contacts";
import Menu from "./menu/menu";
import PageNotFound from "./404Error/pageNotFound";
import NavBar from "./nav-bar/Nav-bar";
import About from "./About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contacts" component={Contact} />
        <Route path="/menu" component={Menu} />
        <Route path="/About" component={About}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
