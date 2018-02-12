import React from "react";
import { ProfileDetailContainer } from "../../theme/profile/profile-theme";

export default class ProfileDetail extends React.Component {
  render() {
    const { fname, lname, email } = this.props.me;
    return (
      <ProfileDetailContainer>
        <div className="name">
          <div className="edit">
            <div className="title">
              <h2>MY PROFILE</h2>
            </div>
            <div className="icon-edit">
              <i className="fas fa-edit" onClick={this.props.gotoEditProfile} />
            </div>
          </div>
          <div>
            <p>First name: {fname}</p>
          </div>
          <div className="line" />
          <div>
            <p>Last name: {lname}</p>
          </div>
          <div className="line" />
          <div>
            <p>E-mail: {email}</p>
          </div>
        </div>
      </ProfileDetailContainer>
    );
  }
}
