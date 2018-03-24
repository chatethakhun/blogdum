import { compose, withHandlers, withState, lifecycle } from "recompose";

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
import { graphql, withApollo } from "react-apollo";
import { CenterComponent } from "../../component/common/center-component/centercomponent";
import ImageCompressor from "image-compressor.js";
const creastePost = gql`
  mutation createPost($image: String, $title: String!, $description: String!) {
    createPost(title: $title, description: $description, image: $image) {
      message
      status
    }
  }
`;

const getPost = gql`
  query post($skip: Int) {
    getPost(limit: 5, skip: $skip) {
      id
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
  withApollo,
  graphql(creastePost),
  graphql(getPost, {
    options: props => {
      return {
        variables: { skip: 1 }
      };
    }
  }),
  withState("popupOpen", "isOpen", false),
  withState("value", "changeValue", ""),
  withState("canSubmit", "changeEnableSubmit", false),
  withState("fileImage", "setImage", null),
  withState("post", "setPost", null),
  withState("isLoading", "changeIsLoad", false),
  withState("skip", "changeSkip", 1),
  withHandlers({
    updateFeed: props => newFeed => {
      props.setPost(newFeed);
    }
  }),
  withHandlers(() => {
    let form = null;
    return {
      onRef: () => ref => (form = ref),
      submits: props => formData => {
        props.changeIsLoad(true);
        if (props.fileImage) {
          // compress image beforre upload
          const imageCompressor = new ImageCompressor();
          imageCompressor
            .compress(props.fileImage, {
              quality: 0.6
            })
            .then(res => {
              //console.log("compress image", res);
              const form = new FormData();
              form.append("file", res, res.name);
              const config = {
                headers: {
                  "content-type": "multipart/form-data",
                  authorization: `Bearer ${localStorage.getItem("token")}`
                }
              };
              axios
                .post(PRODUCT_ENDPOINT + "v1/upload", form, config)
                .then(res => {
                  props
                    .mutate({
                      variables: {
                        title: formData.title,
                        description: formData.description,
                        image: res.data.url
                      },
                      refetchQueries: [{ query: getPost }]
                    })
                    .then(res => {
                      if (res.data.createPost.status) {
                        props.data.refetch().then(({ data }) => {
                          props.changeIsLoad(false);
                          props.isOpen(false);
                          props.updateFeed(data.getPost);
                          form.reset();
                        });
                      }
                    });
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
              if (res.data.createPost.status) {
                props.data.refetch().then(({ data }) => {
                  props.changeIsLoad(false);
                  props.isOpen(false);
                  props.updateFeed(data.getPost);
                  form.reset();
                });
              }
            });
        }
      }
    };
  }),
  withHandlers({
    handleOpenPopup: props => () => {
      props.isOpen(!props.popupOpen);
    },
    handleClosePopup: props => () => {
      if (props.popupOpen) {
        props.isOpen(false);
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
    },
    refetch: props => () => {
      props.data.refetch().then(res => {
        props.updateFeed(res.data.getPost);
      });
    },
    handleScroll: props => event => {
      // scroll to bottom then fetch data
      const feed = document.getElementById("feed").scrollHeight;
      const html = document.documentElement;
      if (event.target.scrollTop + html.clientHeight >= feed) {
        props.changeIsLoad(true);
        const newSkip = props.skip + 1;
        props.client
          .query({
            query: gql`
              query post($skip: Int!) {
                getPost(limit: 5, skip: $skip) {
                  image
                  title
                  description
                  create_at
                }
              }
            `,
            variables: { skip: newSkip }
          })
          .then(res => {
            if (props.data.networkStatus === 7) {
              if (res.data.getPost.length > 0) {
                let newPost = [...props.post];
                res.data.getPost.map(post => newPost.push(post));
                props.setPost(newPost);
                props.changeSkip(newSkip);
              }
            }
            props.changeIsLoad(false);
          });
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      //add handle scroll
      window.addEventListener("scroll", this.props.handleScroll, true);
    },
    componentWillReceiveProps(nextProps) {
      // check apollo load finish
      if (
        this.props.data.networkStatus === 1 &&
        nextProps.data.networkStatus === 7
      ) {
        nextProps.setPost(nextProps.data.getPost);
      }
    },
    componentWillUnmount() {
      //must have this
      window.removeEventListener("scroll", this.props.handleScroll, true);
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
          onSubmit={props.submits}
          onValid={props.enableSubmit}
          onInvalid={props.disableSubmit}
          ref={props.onRef}
        >
          <InputPost
            value={props.value}
            canSubmit={props.canSubmit}
            isLoading={props.isLoading}
            getImage={image => props.getImage(image)}
            //resetForm={props.submits}
          />
        </Formsy.Form>
      </FormCreatePostContainer>
    </Popup>
    <div id="feed">
      {!props.data.loading ? (
        props.post &&
        props.post.map((post, index) => (
          <Feed
            key={index}
            post={post}
            me={props.me}
            id="feed"
            refetch={props.refetch}
          />
        ))
      ) : (
        <CenterComponent loading height="100vh" />
      )}
    </div>
    {props.isLoading && <CenterComponent loading />}
  </Wrapper>
);

export default enhance(MyBlog);
