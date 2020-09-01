import React from "react";
import FormValidation from "./formValidation";
import "./login.scss";
import Joi from "joi-browser";
import InputField from "./reusableInputField";

class LoginPage extends FormValidation {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //after validation - on submit button
    console.log("submited");
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-wrapper">
          <InputField
            value={this.state.data.username}
            name={"username"}
            onChange={this.onTextChange}
            label={"Please enter a username"}
            error={this.state.errors.username}
            type={"text"}
          />
          <InputField
            value={this.state.data.password}
            name={"password"}
            onChange={this.onTextChange}
            label={"Please enter a password"}
            error={this.state.errors.password}
            type={"password"}
          />
          <button
            type="submit"
            className="btn btn-primary custom"
            disabled={this.validate()}
          >
            Sign in
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
