import { PRODUCT_ENDPOINT } from "../../constant/apollo/constant";
import { ProfilePictureContainer } from "../../theme/profile/profile-theme";
import React from "react";
import axios from "axios";

class PictureProfile extends React.Component {
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
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    axios.post(PRODUCT_ENDPOINT + "v1/upload", formData, config).then(res => {
      this.setState({
        isLoading: false,
        imageUrl: res.data.url
      });
      this.props.updateProfile(this.state.imageUrl);
    });
  };

  render() {
    return (
      <ProfilePictureContainer>
        <div className="image-profile">
          <div
            className="img"
            style={{ backgroundImage: "url(" + this.props.profile + ")" }}
          />
        </div>
      </ProfilePictureContainer>
    );
  }
}

export default PictureProfile;
