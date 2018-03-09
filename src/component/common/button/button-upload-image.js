import { ButtonComponent } from "../button/button";
import { COLOR } from "../../../constant/theme/constant";
import React from "react";

class ButtonUploadImage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.selectedImage = this.selectedImage.bind(this);
    this.sendImageToParent = this.sendImageToParent.bind(this);
  }
  handleClick = e => {
    e.preventDefault();
    var inputField = this.refs.fileField; //Click Text To Upload Picture
    inputField.click();
  };
  selectedImage = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.sendImageToParent(reader.result, file);
    };

    reader.readAsDataURL(file);
  };

  sendImageToParent = (image, file) => {
    this.props.getFileImage({ image, file });
  };
  render() {
    return (
      <div>
        <div>
          <ButtonComponent
            onClick={this.handleClick}
            width="40px"
            bgColor={COLOR.SECONARY}
          >
            <i className="fas fa-images" />
          </ButtonComponent>
          <input
            type="file"
            ref="fileField"
            type="file"
            onChange={this.selectedImage}
            accept=".jpg,.jpeg,.png"
            style={{
              display: "none"
            }}
          />
        </div>
      </div>
    );
  }
}
export default ButtonUploadImage;
