import React, { Component } from "react";
import "./css/todolist.css";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return (
      <li
        className="todo_item_li"
        onClick={() => this.delete(item.key)}
        key={item.key}
      >
        {" "}
        {item.text}{" "}
      </li>
    );
  }
  render() {
    var tt = this.props.entries;
    tt = tt.map(this.createTasks);
    return <ul>{tt}</ul>;
  }
}

export default TodoItem;
