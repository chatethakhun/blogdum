import { compose, lifecycle, withHandlers, withState } from "recompose";

import { ButtonComponent } from "../../component/common/button/button";
import { CenterComponent } from "../../component/common/center-component/centercomponent";
import { EditProfileContainer } from "../../theme/profile/profile-theme";
import Formsy from "formsy-react-es6";
import { PRODUCT_ENDPOINT } from "../../constant/apollo/constant";
import React from "react";
import Text from "../../component/common/input/text";
import { Wrapper } from "../../theme/profile/profile-theme";
import axios from "axios";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const updateProfile = gql`
  mutation updateProfile(
    $imageUrl: String!
    $fname: String!
    $lname: String!
    $email: String!
  ) {
    updateProfile(
      imageUrl: $imageUrl
      fname: $fname
      lname: $lname
      email: $email
    ) {
      message
      status
    }
  }
`;

const enhance = compose(
  connect(state => {
    return {
      me: state.me.me.me
    };
  }),
  graphql(updateProfile),
  withState("canSubmit", "changeCanSubmit", false),
  withState("imgProfile", "changeImageProfie", ""),
  withHandlers({
    enableButton: props => model => {
      if (
        model.fname !== props.me.fname ||
        model.lname !== props.me.lname ||
        model.email !== props.me.email
      ) {
        props.changeCanSubmit(true);
      } else {
        props.changeCanSubmit(false);
      }
    },
    submit: props => model => {
      props
        .mutate({
          variables: {
            imageUrl: props.imgProfile,
            fname: model.fname,
            lname: model.lname,
            email: model.email
          }
        })
        .then(res => {
          // window.location.reload();
          props.refetch();
        });
    },
    _handleClick: props => event => {
      var inputField = this.refs.fileField; //Click Text To Upload Picture
      inputField.click();
    },
    onChangeImage: props => event => {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("file", image);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      axios.post(PRODUCT_ENDPOINT + "v1/upload", formData, config).then(res => {
        props.changeImageProfie(res.data.url);
        props.changeCanSubmit(true);
      });
    }
  }),
  lifecycle({
    componentWillMount() {
      this.props.changeImageProfie(this.props.me.imageUrl);
      //this.props.changeImageProfile(this.props.me.imageUrl)
    }
  })
);

const EditProfile = props => (
  <EditProfileContainer>
    <ImageProfile
      _handleClick={props._handleClick}
      onChangeImage={props.onChangeImage}
      profileImage={props.imgProfile}
    />
    <div className="edit-form">
      <Formsy.Form onValidSubmit={props.submit} onChange={props.enableButton}>
        <div>
          <Text name="fname" value={props.me.fname} />
        </div>
        <div>
          <Text name="lname" value={props.me.lname} />
        </div>
        <div>
          <Text name="email" value={props.me.email} />
        </div>
        <ButtonComponent disabled={!props.canSubmit}>Change</ButtonComponent>
      </Formsy.Form>
    </div>
  </EditProfileContainer>
);

export default enhance(EditProfile);

class ImageProfile extends React.Component {
  _handleClick = () => {
    const inputField = this.refs.fileField; //Click Text To Upload Picture
    inputField.click();
  };
  render() {
    return (
      <Wrapper onClick={this._handleClick.bind(this)}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.profileImage})`
          }}
        />
        <input
          ref="fileField"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={this.props.onChangeImage}
        />
        {!false ? (
          <p>Click to update picture profile</p>
        ) : (
          <CenterComponent loading />
        )}
      </Wrapper>
    );
  }
}
