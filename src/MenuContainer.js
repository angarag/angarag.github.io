import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }
  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked");
    //e.stopPropogation();
  }
  componentDidMount() {
    console.log("MenuContainer: component did mount");
  }
  componentDidUpdate() {
    console.log("MenuContainer: component did update");
  }
  render() {
    console.log("MenuContainer: render");
    return (
      <>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu menuVisibility={this.state.visible} />
      </>
    );
  }
}

export default MenuContainer;
