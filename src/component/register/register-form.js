import React from "react";
import { Field } from "redux-form";
import { ButtonComponent } from '../common/button/button'

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

// class renderUploadField extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       file: null
//     }
//   }
//   handleFile = (evt) => {
//     console.log('file upload ===>', this.props)
//     const img = evt.target.files[0]
//     this.setState({
//       file: img
//     })
//     this.props.input.onChange(img)
//   }
//   render() {
//     return <input type="file" onChange={this.handleFile} />
//   }
// }

export const RegisterForm = ({
  onSubmit,
  handleSubmit,
  disabledButton,
  errorMessage,
  isloading
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

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
        validate={[required]}
      />

      <Field
        name="fname"
        component={renderField}
        label="First Name"
        type="text"
        placeholder="First Name"
        validate={[required]}
      />

      <Field
        name="lname"
        component={renderField}
        label="Last Name"
        type="text"
        placeholder="Last Name"
        validate={[required]}
      />
      {
        !isloading ?       
          <button type="submit" disabled={disabledButton}>
            Register
          </button>: 
          <ButtonComponent loading/>
      }

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};
