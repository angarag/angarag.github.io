import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./spa/Home";
import Stuff from "./spa/Stuff";
import Contact from "./spa/Contact";
import Connect from "./App";
import Counter from "./Counter";
import Clock from "./Clock";
import Root from "./Root";
import TodoList from "./TodoList";
class Main extends Component {
  render() {
    console.log("Main: render");
    return (
      <>
        {/* <Connect>
          <Counter inc={Connect.inc} dec={Connect.dec} count={Connect.count} />
        </Connect> */}
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
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
            <Route path="/clock" component={Clock} />
            <Route path="/tictactoe" component={Root} />
            <Route path="/todolist" component={TodoList} />
          </div>
        </HashRouter>
      </>
    );
  }
}

export default Main;
