import * as Yup from "yup";
import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useWizard } from "@barrerajulio/codebit.ui.wizard";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

type SignupFormValues = {
  email: string;
};

const SignupStep1 = () => {
  const { disableGoToNextPage, enableGoToNextPage, nextPage, onGoToNextPage } =
    useWizard();
  const handleOnSubmit = (values: SignupFormValues) => {
    console.log(values);
    nextPage();
  };
  const form = useFormik<SignupFormValues>({
    onSubmit: handleOnSubmit,
    validationSchema,
    initialValues: {
      email: "",
    },
  });
  useEffect(() => {
    form.isValid && form.dirty ? enableGoToNextPage() : disableGoToNextPage();
  }, [disableGoToNextPage, enableGoToNextPage, form.dirty, form.isValid]);
  useEffect(() => {
    if (onGoToNextPage !== true) {
      return;
    }
    form.submitForm();
  }, [onGoToNextPage]);

  return (
    <form onSubmit={form.handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="john@email.com"
        label="Email"
        name="email"
        onChange={form.handleChange}
        value={form.values.email}
      />
    </form>
  );
};

export default SignupStep1;
