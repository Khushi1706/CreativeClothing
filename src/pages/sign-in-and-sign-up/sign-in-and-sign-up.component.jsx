import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.styles.scss";
import Signup from "../../components/signup/signup.component";
const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <Signup></Signup>
  </div>
);

export default SignInAndSignUp;
