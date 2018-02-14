import React from "react";
import { Field } from "redux-form";
import { ButtonComponent } from "../common/button/button";

const required = value => (value ? undefined : "Required");

class renderField extends React.Component {
  render() {
    console.log("render props ===>", this.props);
    return (
      <div>
        <input
          {...this.props.input}
          placeholder={this.props.label}
          type={this.props.type}
        />
        {this.props.meta.touched &&
          ((this.props.meta.error && <span>{this.props.meta.error}</span>) ||
            (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
      </div>
    );
  }
}


class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultValue: ""
    };
  }

  componentWillMount() {
    if (this.props.defaultValue) {
      this.setState({
        defaultValue: this.props.defaultValue
      });
    }
  }
  render() {
    const {
      onSubmit,
      handleSubmit,
      errorMessage,
    } = this.props

    console.log("this props ===>", this.props.isLoading);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p>{errorMessage}</p>}
        <Field
          name="email"
          component={renderField}
          label="Email"
          type="email"
          validate={[required]}
        />
        <Field
          name="password"
          component={renderField}
          label="Password"
          type="password"
          validate={[required]}
        />
        <Field
          name="fname"
          component={renderField}
          label="First name"
          type="text"
          validate={[required]}
        />
        <Field
          name="lname"
          component={renderField}
          label="Last name"
          type="text"
          validate={[required]}
        />
        {
          !this.props.isLoading ? <button type='submit' >Submit</button> :<ButtonComponent loading/> 
        }

      </form>
    );
  }
}

export default RegisterForm;
