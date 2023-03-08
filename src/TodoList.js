import React, { Component, createRef } from "react";

export default class TodoList extends Component {
  state = {
    items: [],
  };

  formRef = createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.formRef.current.elements;
    if (todo.value !== "") {
      this.setState((state) => {
        const newState = { items: [...state.items, todo.value] };
        todo.value = "";
        todo.focus();
        return newState;
      });
    }
  };

  handleReset = () => {
    const { todo } = this.formRef.current.elements;
    this.setState({ items: [] });
    todo.focus();
  };

  handleRemove(index) {
    this.setState((state) => ({
      items: state.items.filter((item, itemIndex) => itemIndex !== index),
    }));
  }

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input name="todo" />
          <button>Add</button>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>
              {item}{" "}
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
