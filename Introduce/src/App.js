import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Introduce from "./components/introduce";
import Menu from "./components/menu";
import BaeminClient from "./components/project/baeminClient";
import BaeminServer from "./components/project/baeminServer";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/project/baeminClient" component={BaeminClient} />
        <Route exact path="/project/baeminServer" component={BaeminServer} />
      </div>
    </Router>
  );
};

export default App;