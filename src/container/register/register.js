import { compose, lifecycle, withHandlers, withState } from "recompose";
import { register, requestServer } from "../../action/login";

import { ButtonComponent } from "../../component/common/button/button";
import Formsy from "formsy-react-es6";
import React from "react";
import { RegisterContainer } from "../../component/register/register-container";
import Text from "../../component/common/input/text";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const enhance = compose(
  connect(
    state => {
      return {
        login: state.login
      };
    },
    dispatch =>
      bindActionCreators(
        {
          register,
          requestServer
        },
        dispatch
      )
  ),
  withState("canSubmit", "changeSubmit", false),
  withHandlers({
    enableButton: props => () => props.changeSubmit(true),
    disableButton: props => () => {
      if (props.canSubmit) {
        props.changeSubmit(false);
      }
    },
    submit: props => model => {
      props.requestServer();
      props.register(model);
    }
  }),
  lifecycle({
    componentWillMount() {
      if (localStorage.getItem("token")) {
        this.props.router.push("/profile");
      }
    }
  })
);

const Register = props => (
  <RegisterContainer>
    <div>
      <div className="image-intro" />
      <div className="register-form">
        <div className="intro-register">
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <p>
              Don't have an account?. <span>Create your account.</span> It takes
              less than a minute
            </p>
          </div>
        </div>
        <div className="form">
          <Formsy.Form
            onValid={props.enableButton}
            onInvalid={props.disableButton}
            onValidSubmit={props.submit}
          >
            <div>
              <Text
                name="email"
                required
                placeholder="Email"
                type="email"
                value=""
              />
            </div>
            <div>
              <Text
                name="password"
                required
                placeholder="Password"
                type="password"
                value=""
              />
            </div>
            <div>
              <Text name="fname" required placeholder="First Name" value="" />
            </div>
            <div>
              <Text name="lname" placeholder="Last Name" value="" />
            </div>
            {props.login.isLoading ? (
              <ButtonComponent loading />
            ) : (
              <ButtonComponent disabled={!props.canSubmit}>
                Submit
              </ButtonComponent>
            )}
          </Formsy.Form>
        </div>
      </div>
    </div>
  </RegisterContainer>
);

export default enhance(Register);
