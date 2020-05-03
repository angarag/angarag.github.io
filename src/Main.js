import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Clock from "./Clock";
import Root from "./Root";
import TodoList from "./TodoList";
import { Nav } from "./components/Navigation";
import "./css/customizedByMars.css";
import "./css/style.css";
// import "./css/open-iconic-bootstrap.min.css";
// import "./css/animate.css";
// import "./css/owl.theme.default.min.css";
// import "./css/magnific-popup.css";
// import "./css/aos.css";
// import "./css/ionicons.min.css";
// import "./css/flaticon.css";
// import "./css/icomoon.css";
// import AOS from "aos";
//import $ from "jquery";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Busad from "./components/Busad";
import Resume from "./components/Resume";
const Main = () => {
  React.useEffect(() => {
    // AOS.init({
    //   duration: 800,
    //   easing: "slide",
    // });
  }, []);

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
      <Resume />
      <Busad />
    </>
  );
};

export default Main;
