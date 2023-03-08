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
      this.setState((state) => ({ items: [...state.items, todo.value] }));
    }
  };

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input name="todo" />
          <button>Add</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
