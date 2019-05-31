import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./spa/Home";
import Stuff from "./spa/Stuff";
import Contact from "./spa/Contact";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Main: component did mount");
  }
  componentDidUpdate() {
    console.log("Main: component did update");
  }
  render() {
    console.log("Main: render");
    return (
      <HashRouter>
        <h1>Simple SPA</h1>
        <div>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
