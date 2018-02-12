import React from "react";
import { ProfileDetailContainer } from "../../theme/profile/profile-theme";

export default class ProfileDetail extends React.Component {
  render() {
    const { fname, lname, email } = this.props.me;
    return (
      <ProfileDetailContainer>
        <div className="name">
          <div className="edit">
            <i className="fas fa-edit" 
              onClick={this.props.gotoEditProfile}/>
          </div>
          <div>
            <p>First name: {fname}</p>
          </div>
          <hr />
          <div>
            <p>Last name: {lname}</p>
          </div>
          <hr />
          <div>
            <p>E-mail: {email}</p>
          </div>
        </div>
      </ProfileDetailContainer>
    );
  }
}
