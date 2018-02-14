import React from "react";
import { Field } from "redux-form";
import { LoginFormContainer } from "../../theme/login/index";
import { ButtonComponent } from "../common/button/button";

const required = value => (value ? undefined : "Required");

const renderField = ({
  // validate section
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export const LoginForm = ({
  onSubmit,
  handleSubmit,
  disabledButton,
  errorMessage,
  isLoading
}) => {
  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <p>{errorMessage}</p>}
        <Field
          name="email"
          component={renderField}
          label="Email"
          type="email"
          placeholder="Email"
          validate={[required]}
        />

        <Field
          name="password"
          component={renderField}
          label="Password"
          type="password"
          placeholder="Password"
        />

        {
        !isLoading ? (
          <button type="submit">
            LOG IN
          </button>
        ) : (
          <ButtonComponent loading />
        )}
      </form>
    </LoginFormContainer>
  );
};
