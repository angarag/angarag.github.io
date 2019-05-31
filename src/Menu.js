import React, { Component } from "react";
import "./css/menuButton.css";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Menu: component did mount");
  }
  componentDidUpdate() {
    console.log("Menu: component did update");
  }
  render() {
    console.log("Menu: render");
    var visibility = "hide";
    if (this.props.menuVisibility) visibility = "show";
    return (
      <div className={visibility}>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consectetur ut distinctio velit adipisci autem eum
          </li>
          <li>Lorem</li>
          <li>
            atque, accusantium, unde voluptatum quidem illum blanditiis repellat
            omnis! Vitae ratione exercitationem neque molestiae.
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
