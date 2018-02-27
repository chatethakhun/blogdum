import { EditProfileContainer } from "../../theme/profile/profile-theme";
import React from "react";
import RegisterForm from "../../component/register/register-form";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { setMe } from "../../action/member";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      me: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextprops ===>", nextProps.initialValues);
    if (nextProps.initialValues) {
      this.setState({
        me: nextProps.initialValues
      });
    }
  }

  onSubmit = () => {};
  render() {
    console.log(" edit profile props", this.props);
    console.log(" edit profile state", this.state);
    return (
      <EditProfileContainer>
        <div
          className="edit-picture"
          style={{
            border: "1px solid red"
          }}
        >
          <div
            className="img"
            style={{
              backgroundImage: `url(${this.state.me.imageUrl})`
            }}
          />
          <div className="text-change">
            <p>Click to change profile</p>
          </div>
        </div>
        <div
          className="edit-form"
          style={{
            border: "1px solid green"
          }}
        >
          <RegisterForm
            handleSubmit={this.props.handleSubmit}
            onSubmit={this.onSubmit}
            initialValues={this.state.me}
            loadMe={this.props.load}
          />
        </div>
      </EditProfileContainer>
    );
  }
}

const formConfiguration = {
  form: "edit-form"
};

EditProfile = reduxForm(formConfiguration)(EditProfile);

EditProfile = connect(
  state => ({
    initialValues: state.me.me.me //// set initial data from load
  }),
  { load: setMe } /// setme is action for set initial data
)(EditProfile);

export default EditProfile;
