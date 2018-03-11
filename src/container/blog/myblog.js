import { compose, withHandlers, withState } from "recompose";

import CreastePost from "../../component/blog/create-post";
import Feed from "../../component/blog/feed";
import { FormCreatePostContainer } from "../../theme/common/pop-up/pop-up-theme";
import Formsy from "formsy-react-es6";
import InputPost from "../../component/blog/input-post";
import { PRODUCT_ENDPOINT } from "../../constant/apollo/constant";
import Popup from "../../component/common/pop-up/pop-up";
import React from "react";
import { Wrapper } from "../../theme/common/wrapper/wrapper";
import axios from "axios";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const creastePost = gql`
  mutation createPost($image: String, $title: String!, $description: String!) {
    createPost(title: $title, description: $description, image: $image) {
      message
      status
    }
  }
`;

const getPost = gql`
  query post {
    getPost {
      image
      title
      description
      create_at
    }
  }
`;

const enhance = compose(
  connect(state => {
    return {
      me: state.me.me.me
    };
  }),
  graphql(creastePost),
  graphql(getPost),
  withState("popupOpen", "isOpen", false),
  withState("canSubmit", "changeEnableSubmit", false),
  withState("fileImage", "setImage", null),
  withState("post", "setPost", ""),
  withState("isLoading", "changeIsLoad", false),
  withHandlers({
    handleOpenPopup: props => () => {
      props.isOpen(!props.popupOpen);
    },
    handleClosePopup: props => () => {
      if (props.popupOpen) {
        props.isOpen(false);
      }
    },
    submit: props => formData => {
      props.changeIsLoad(true);
      if (props.fileImage) {
        const form = new FormData();
        form.append("file", props.fileImage);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
            authorization: `Bearer ${localStorage.getItem("token")}`
          }
        };
        axios.post(PRODUCT_ENDPOINT + "v1/upload", form, config).then(res => {
          console.log(res);
          props
            .mutate({
              variables: {
                title: formData.title,
                description: formData.description,
                image: res.data.url
              }
            })
            .then(res => {
              props.changeIsLoad(false);
              if (res.data.createPost.status) {
                window.location.reload();
              }
            });
        });
      } else {
        props
          .mutate({
            variables: {
              title: formData.title,
              description: formData.description,
              image: null
            }
          })
          .then(res => {
            props.changeIsLoad(false);
            if (res.data.createPost.status) {
              window.location.reload();
            }
          });
      }
    },
    enableSubmit: props => () => {
      props.changeEnableSubmit(true);
    },
    disableSubmit: props => () => {
      props.changeEnableSubmit(false);
    },
    getImage: props => image => {
      props.setImage(image);
    }
  })
);

const MyBlog = props => (
  <Wrapper>
    <CreastePost handlePopup={props.handleOpenPopup} />
    <Popup
      isOpen={props.popupOpen}
      isClose={props.handleClosePopup}
      alignCenter
      column
    >
      <FormCreatePostContainer>
        <Formsy.Form
          onValidSubmit={props.submit}
          onValid={props.enableSubmit}
          onInvalid={props.disableSubmit}
          refs="form"
        >
          <InputPost
            defaultValue=""
            canSubmit={props.canSubmit}
            isLoading={props.isLoading}
            getImage={image => props.getImage(image)}
          />
        </Formsy.Form>
      </FormCreatePostContainer>
    </Popup>
    {!props.data.loading
      ? props.data.getPost.map((post, index) => (
          <Feed key={index} post={post} me={props.me} />
        ))
      : ""}
  </Wrapper>
);

export default enhance(MyBlog);
