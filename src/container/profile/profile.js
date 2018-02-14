import React from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql  } from 'react-apollo'
import { ProfileContainer } from "../../theme/profile/profile-theme";
import PictureProfile from "../../component/profile/picture-profile";
import ProfileDetail from "../../component/profile/profile-detail";
import { CenterComponent } from "../../component/common/center-component/centercomponent";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      me: ""
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.gotoEditProfile = this.gotoEditProfile.bind(this);
  }

  updateProfile = imageUrl => {
    this.props.mutate({ variables: { imageUrl } }).then(() => {
      window.location.reload();
    });
  };
  gotoEditProfile = () => {
    alert("coming soon");
  };

  render() {
    return (
      <ProfileContainer>
        {this.props.profile.me ? (
          <div>
            <PictureProfile
              profile={this.props.profile.me.me.imageUrl}
              updateProfile={imageUrl => this.updateProfile(imageUrl)}
            />
            <ProfileDetail
            me={this.props.profile.me.me}
            //gotoEditProfile={this.gotoEditProfile}
            />
          </div>
        ) : (
          <CenterComponent loading />
        )}
      </ProfileContainer>
    );
  }
}

const mapState = state => ({
  profile: state.me
});

const UPDATE_PROFILE = gql`
  mutation updateProfile($imageUrl: String!) {
    updateProfile(imageUrl: $imageUrl) {
      message
      status
    }
  }
`;

//export default graphql(ME_QUERY)(Profile)
export default connect(mapState, null)(graphql(UPDATE_PROFILE)(Profile));
