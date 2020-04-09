import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-buttton.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.PreventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChage = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChage}
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
          ></FormInput>
          <FormInput
            onChange={this.handleChage}
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
          ></FormInput>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
