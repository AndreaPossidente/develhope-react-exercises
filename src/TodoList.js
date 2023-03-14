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

  handleRemove = (index) => {
    this.setState((state) => ({
      items: state.items.filter((item, itemIndex) => itemIndex !== index),
    }));
  };

  render() {
    const styles = {
      container: "flex w-full justify-center items-center flex-col",
      title: "text-xl font-bold px-2 mx-2",
      input: "border py-1 px-1 m-2",
      addBtn:
        "transition ease-in-out duration-300 bg-slate-100 hover:bg-green-200 border py-1 px-3 m-1",
      resetBtn:
        "transition ease-in-out duration-300 bg-slate-100 hover:bg-yellow-200 border py-1 px-3 m-1",
    };

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>To Do List</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input name="todo" className={styles.input} />
          <button className={styles.addBtn}>Add</button>
          <button
            className={styles.resetBtn}
            type="reset"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </form>
        {/* RENDER PROP */}
        {this.props.render(this.state.items, this.handleRemove)}
      </div>
    );
  }
}
