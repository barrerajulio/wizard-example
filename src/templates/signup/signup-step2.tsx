import React from "react";
import { TextField } from "@material-ui/core";

const SignupStep2 = () => {
  return (
    <form>
      <TextField
        variant="outlined"
        label="Password"
        name="password"
        type="password"
      />
    </form>
  );
};

export default SignupStep2;
