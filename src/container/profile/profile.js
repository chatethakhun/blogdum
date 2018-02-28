import { CenterComponent } from "../../component/common/center-component/centercomponent";
import EditProfile from "./edit-profile";
import Modal from "react-modal";
import ModalComponent from "../../component/common/modal/modal";
import PictureProfile from "../../component/profile/picture-profile";
import { ProfileContainer } from "../../theme/profile/profile-theme";
import ProfileDetail from "../../component/profile/profile-detail";
import React from "react";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      me: "",
      modalIsOpen: false
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.gotoEditProfile = this.gotoEditProfile.bind(this);
    this.isClose = this.isClose.bind(this);
  }

  updateProfile = imageUrl => {
    this.props.mutate({ variables: { imageUrl } }).then(() => {
      window.location.reload();
    });
  };
  gotoEditProfile = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  isClose() {
    this.setState({
      modalIsOpen: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.me) {
      this.setState({
        me: nextProps.profile.me.me
      });
    }
  }

  render() {
    console.log("state profile", this.state);
    return (
      <ProfileContainer>
        {this.state.me ? (
          <div>
            <PictureProfile
              profile={this.state.me.imageUrl}
              updateProfile={imageUrl => this.updateProfile(imageUrl)}
            />
            <ProfileDetail
              me={this.state.me}
              gotoEditProfile={this.gotoEditProfile}
            />
          </div>
        ) : (
          <CenterComponent loading />
        )}

        <ModalComponent
          isOpen={this.state.modalIsOpen}
          isClose={this.isClose}
          baseClassName="edit-modal"
          afterOpenClassName="edit-modal-opened"
        >
          <EditProfile />
        </ModalComponent>
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
