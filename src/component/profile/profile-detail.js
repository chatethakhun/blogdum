import React from "react";
import { ProfileDetailContainer } from "../../theme/profile/profile-theme";
import { Wrapper } from "../../theme/common/wrapper/wrapper";
export default class ProfileDetail extends React.Component {
  render() {
    const { fname, lname, email } = this.props.me;
    return (
      <ProfileDetailContainer>
        <div className="head">
          <div className="title">
            <h2>MY PROFILE</h2>
          </div>
          <div className="edit-button">
            <i className="fas fa-edit" onClick={this.props.gotoEditProfile} />
          </div>
        </div>
        <Wrapper className="profile-detail">
          <div className="detail">
            <div>
              <p>First name:</p>
            </div>
            <div>
              <p>{fname}</p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Last name:</p>
            </div>
            <div>
              <p>{lname}</p>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>Email:</p>
            </div>
            <div>
              <p>{email}</p>
            </div>
          </div>
        </Wrapper>
      </ProfileDetailContainer>
    );
  }
}

// <div className="name">
// <div className="edit">
//   <div className="title">
//
//   </div>
//   <div className="icon-edit">
//     <i className="fas fa-edit" onClick={this.props.gotoEditProfile} />
//   </div>
// </div>

// <div className="line" />
// <div>
//   <div>
//     <p>Last name:</p>
//   </div>
//   <div>
//     <p>{lname}</p>
//   </div>
// </div>
// <div className="line" />
// <div>
//   <div>
//     <p>Email:</p>
//   </div>
//   <div>
//     <p>{email}</p>
//   </div>
// </div>
//</div>
