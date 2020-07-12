import React, { Component } from "react";

import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  // for handling form submission
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  // for handling data input
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            autoComplete="off"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            autoComplete="off"
          />

          <CustomButton onClick={this.handleSubmit}>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
