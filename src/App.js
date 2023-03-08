import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (user) => {
    console.log(user);
  };
  render() {
    return (
      <div>
        <hr />
        <TodoList />
        <Hello />
        <hr />
        <Welcome name={<strong>Gianni</strong>} age={25} />
        <hr />
        <Welcome name={<strong>Pino</strong>} age={16} />
        <hr />
        <Welcome name={<strong>Mario</strong>} age={67} />
        <hr />
        <Welcome name={<strong>John</strong>} age={42} />
        <hr />
        <Welcome />
        <hr />
        <Counter initialValue={0} increment={2} interval={2000} />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />
        <hr />
        <Login onLogin={this.onLogin} />
        <hr />
        <UncontrolledLogin onLogin={this.onLogin} />
      </div>
    );
  }
}
