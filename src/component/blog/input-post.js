import { compose, withHandlers, withState } from "recompose";

import { ButtonComponent } from "../common/button/button";
import ButtonUploadImage from "../common/button/button-upload-image";
import { ImagePreview } from "../../theme/common/pop-up/pop-up-theme";
import React from "react";
import Text from "../common/input/text";
import TextareaWithLimitWord from "../common/input/textarea-with-limit-word";
import { Wrapper } from "../../theme/common/wrapper/wrapper";

const enhance = compose(
  withState("imagePreview", "setImagePreview", null),
  withState("title", "handleTitle", ""),
  withState("description", "handleDescription", ""),
  withHandlers({
    getFile: props => ({ image, file }) => {
      props.setImagePreview(image);
      props.getImage(file);
    },
    removePreview: props => () => {
      props.setImagePreview(null);
      props.getImage(null);
    }
  })
);

const InputPost = props => (
  <Wrapper
    bgColor="white"
    borderRadius="8px"
    margin="0px 10px"
    width="500px"
    animation="fade-in 0.35s"
  >
    <div className="title">
      <span>Title: </span>
      <Text name="title" required value={props.title} />
    </div>
    <div className="detail">
      <span>Description: </span>
      <TextareaWithLimitWord
        maxLength={500}
        name="description"
        row="8"
        value={props.description}
        required
      />
    </div>
    <ImagePreview>
      {props.imagePreview ? (
        <div>
          <span className="fas fa-times" onClick={props.removePreview} />
          <img src={props.imagePreview} alt="" />
        </div>
      ) : (
        ""
      )}
    </ImagePreview>
    <div className="button">
      <ButtonUploadImage
        getFileImage={({ image, file }) => props.getFile({ image, file })}
      />
      {!props.isLoading ? (
        <ButtonComponent
          type="submit"
          disabled={!props.canSubmit}
          width="100px"
          //onClick={props.resetForm}
        >
          Post
        </ButtonComponent>
      ) : (
        <ButtonComponent loading width="100px" />
      )}
    </div>
  </Wrapper>
);

export default enhance(InputPost);
