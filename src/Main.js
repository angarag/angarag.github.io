import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Clock from "./Clock";
import Root from "./Root";
import TodoList from "./TodoList";
import Nav from "./components/Navigation";
import "./othercss/customizedByMars.css";
import "./othercss/style.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Busad from "./components/Busad";
import Education from "./components/Education";
import Contact from "./components/Contact";
const Main = () => {
  React.useEffect(() => {}, []);

  console.log("Main: render");
  return (
    <>
      <HashRouter>
        <Route path="/clock" component={Clock} />
        <Route path="/tictactoe" component={Root} />
        <Route path="/todolist" component={TodoList} />
      </HashRouter>
      <Nav />
      <Home />
      <AboutMe />
      <Education />
      <Busad />
      <Contact />
    </>
  );
};

export default Main;
