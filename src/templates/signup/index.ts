import React, { FC } from "react";

import SignupStep1 from "./signup-step1";
import SignupStep2 from "./signup-step2";
import { SignupType } from "./types";

interface ISignupProps {
  type: SignupType;
}

const Signup: FC<ISignupProps> = ({ type }) => {
  const signupTypes: { [key: string]: React.ReactNode } = {
    email: SignupStep1,
    password: SignupStep2,
  };
  if (!signupTypes.hasOwnProperty(type)) {
    throw new Error("Signup component not found");
  }

  return React.createElement(signupTypes[type] as string);
};

export default Signup;
