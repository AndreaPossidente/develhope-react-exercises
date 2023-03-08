import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
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
        <br />
        <button
          type="submit"
          disabled={
            this.state.username === "" || this.state.password === ""
              ? true
              : false
          }
          onClick={() => this.props.onLogin(this.state)}
        >
          Login
        </button>
        <pre>{JSON.stringify(this.state)}</pre>
      </>
    );
  }
}
