import { LoginBox, LoginContainer } from "../../theme/login";
import {
  REQUEST_FETCH_SERVER,
  SET_INITTAIL
} from '../../constant/redux/constant'

import { Link } from "react-router";
import { LoginForm } from "../../component/login/login-form";
import React from "react";
import { auth } from "../../action/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: ''
    };
  }
  componentWillMount() {
    this.props.dispatch({
      type: SET_INITTAIL
    })
    if (localStorage.getItem("token")) {
      this.props.router.push("/profile");
    }
  }
  onSubmit = ({ email, password }) => {
    this.props.dispatch({
      type:REQUEST_FETCH_SERVER
    })
    this.props.auth({ email, password })
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.errorMessage) {
      this.setState({
        errorMessage: nextProps.login.errorMessage,
      })
    }
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <LoginContainer>
        <LoginBox>
          <div>
            <h1>Member Login</h1>
          </div>
          <LoginForm
            onSubmit={this.onSubmit}
            handleSubmit={handleSubmit}
            disabledButton={this.state.disabledButton}
            errorMessage={this.state.errorMessage}
            isLoading={this.props.login.isLoading}
          />
          <div>
            <Link to="/register">Register Now!</Link>
          </div>
        </LoginBox>
      </LoginContainer>
    );
  }
}

const formConfiguration = {
  form: "login-form"
};

const mapDispatchToProps = (
  dispatch //use when use asycn in action or fetch data from server
) =>
  bindActionCreators(
    {
      auth
    },
    dispatch
  );

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formConfiguration)(Login)
);
