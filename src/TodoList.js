import React, { Component } from "react";
import TodoItem from "./TodoItems";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    console.log(this.mars);
    if (this.mars.value !== "") {
      var item_arr = this.state.items;
      item_arr.unshift({
        text: this.mars.value,
        key: Date.now(),
      });
      this.setState({
        items: item_arr,
      });
      console.log(item_arr);
    }
    e.preventDefault();
  }
  deleteItem(key) {
    const fltrd = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: fltrd,
    });
  }
  componentDidMount(e) {
    console.log("TodoList: component did mount");
    console.log(e);
  }
  componentDidUpdate() {
    console.log("TodoList: component did update");
  }
  render() {
    console.log("TodoList: render");
    var mars = [];
    mars.push(
      <div>
        <div>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              ref={(a) => {
                this._inputElement = a;
                this.mars = a;
              }}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItem entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
    return <div>{mars}</div>;
  }
}

export default TodoList;
