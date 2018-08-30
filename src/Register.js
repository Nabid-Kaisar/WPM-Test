import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleReg = this.handleReg.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      userName: "",
      passWord: "",
      email: ""
    };
  }

  handleReg() {
    //save the this.state data into your database
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handlePassWordChange(e) {
    this.setState({ passWord: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div id="bg">
        <br />
        <br />

        <h1 style={{ textAlign: "center", color: "green" }}>
          Please Sign up to continue
        </h1>
        <div className="module">
          <form className="form">
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="textbox"
              onChange={this.handleUserNameChange}
            />

            <input
              type="password"
              name="pass"
              placeholder="Password"
              className="textbox"
              onChange={this.handlePassWordChange}
            />

            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="textbox"
              onChange={this.handleEmailChange}
            />
            <input
              type="button"
              value="Register"
              className="button"
              onClick={this.handleReg}
            />
          </form>
        </div>

        <div>
          {console.log(this.state.userName)}
          {console.log(this.state.email)}
          {console.log(this.state.passWord)}
        </div>
      </div>
    );
  }
}

export default Register;
