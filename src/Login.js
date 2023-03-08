import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        <label>Username:</label>
        <br />
        <input
          onChange={this.handleInputChange}
          name="username"
          value={this.state.username}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          onChange={this.handleInputChange}
          name="password"
          type="password"
          value={this.state.password}
        />
        <br />
        <input
          onChange={this.handleInputChange}
          name="remember"
          type="checkbox"
          checked={this.state.checked}
        />{" "}
        <label>Remember</label>
        <pre>{JSON.stringify(this.state)}</pre>
      </>
    );
  }
}
