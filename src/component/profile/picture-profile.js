import React from "react";
import { ProfilePictureContainer } from "../../theme/profile/profile-theme";
import { CenterComponent } from "../common/center-component/centercomponent";

export default class PictureProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      imageUrl: null
    };
  }
  _handleClick = e => {
    var inputField = this.refs.fileField; //Click Text To Upload Picture
    inputField.click();
  };
  onChange = e => {
    // this.setState({
    //   isLoading: true
    // });
    // const image = e.target.files[0];
    // const formData = new FormData();
    // formData.append("file", image);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //     authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // };
    // axios
    //   .post("http://localhost:8080/v1/upload", formData, config)
    //   .then(res => {
    //     console.log("response ====> ", res);
    //     this.setState({
    //       isLoading: false,
    //       imageUrl: res.data.url
    //     });
    //     this.props.updateProfile(this.state.imageUrl);
    //   });
  };

  render() {
    console.log(this.props.profile);
    return (
      <ProfilePictureContainer>
        <div className="image-profile">
          <img
            src={
              this.props.profile
            }
            alt=""
            //onClick={this.goToEditProfile.bind(this)}
          />
        </div>
        <div onClick={this._handleClick.bind(this)}>
          <input
            ref="fileField"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={this.onChange.bind(this)}
          />
          {!this.state.isLoading ? (
            <p>Click to update picture profile</p>
          ) : (
            <CenterComponent loading />
          )}
        </div>
      </ProfilePictureContainer>
    );
  }
}
