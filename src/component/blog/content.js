import { ContentContainer } from "../../theme/blog/blog-theme";
import Linkify from "react-linkify";
import React from "react";

export const Content = props => (
  <ContentContainer>
    <div className="image">
      {props.post && <img src={props.post.image} alt="" />}
    </div>
    <div className="content">
      {props.post && <Linkify>{props.post.description}</Linkify>}
    </div>
  </ContentContainer>
);
