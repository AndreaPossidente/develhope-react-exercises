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
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="text-xl font-bold px-2 mx-2">To Do List</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input name="todo" className="border py-1 px-1 m-2" />
          <button className="transition ease-in-out duration-300 bg-slate-100 hover:bg-green-200 border py-1 px-3 m-1 ">
            Add
          </button>
          <button
            className="transition ease-in-out duration-300 bg-slate-100 hover:bg-yellow-200 border py-1 px-3 m-1 "
            type="reset"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </form>
        <ul
          className={`border overflow-hidden rounded-md m-2 w-[346px] ${
            this.state.items.length === 0 && "invisible"
          }`}
        >
          {this.state.items.map((item, index) => (
            <li
              key={item + index}
              className="border-b flex justify-between p-2 even:bg-slate-100 last:border-none"
            >
              {item}{" "}
              <button
                className="transition ease-in-out duration-200 text-xs hover:text-red-600 hover:scale-105"
                onClick={() => this.handleRemove(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
