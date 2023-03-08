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

  handleReset = () => {
    this.setState({ username: "", password: "", remember: false });
  };

  render() {
    const LoginButtonStyle = {
      backgroundColor:
        this.state.username.length === 0
          ? ""
          : this.state.username.length < 8
          ? "#ff0000"
          : "#00ff00",
    };

    return (
      <div>
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
          checked={this.state.remember}
        />{" "}
        <label>Remember</label>
        <br />
        <button
          type="submit"
          style={LoginButtonStyle}
          disabled={
            this.state.username === "" || this.state.password === ""
              ? true
              : false
          }
          onClick={() => this.props.onLogin(this.state)}
        >
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}
