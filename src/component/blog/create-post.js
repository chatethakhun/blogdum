import { CreatePostContainer } from "../../theme/blog/blog-theme";
import React from "react";
import { Wrapper } from "../../theme/common/wrapper/wrapper";

const CreatePost = props => (
  <Wrapper padding="0" onClick={props.handlePopup}>
    <CreatePostContainer>
      <span>Create post</span>
    </CreatePostContainer>
  </Wrapper>
);

export default CreatePost;
