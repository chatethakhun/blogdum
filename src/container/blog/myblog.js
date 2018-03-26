import { compose, withHandlers, withState, lifecycle } from "recompose";

import CreastePost from "../../component/blog/create-post";
import Feed from "../../component/blog/feed";
import { FormCreatePostContainer } from "../../theme/common/pop-up/pop-up-theme";
import Formsy from "formsy-react-es6";
import { PRODUCT_ENDPOINT } from "../../constant/apollo/constant";
import Popup from "../../component/common/pop-up/pop-up";
import React from "react";
import { Wrapper } from "../../theme/common/wrapper/wrapper";
import axios from "axios";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql, withApollo } from "react-apollo";
import { CenterComponent } from "../../component/common/center-component/centercomponent";
import Text from '../../component/common/input/text'
import TextareaWithLimitWord from '../../component/common/input/textarea-with-limit-word'
import DropDown from '../../component/common/input/dropdown'
import { ButtonComponent } from "../../component/common/button/button";
import ButtonUploadImage from '../../component/common/button/button-upload-image'
const creastePost = gql`
  mutation createPost($image: String, $title: String!, $category: String!, $description: String!) {
    createPost(title: $title, description: $description, image: $image, category:$category) {
      message
      status
    }
  }
`;

const getPost = gql`
  query post($skip: Int) {
    posts(limit: 5, skip: $skip) {
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
  withState("file", "handleFile", []),
  withState("post", "setPost", null),
  withState("isLoading", "changeIsLoad", false),
  withState("skip", "changeSkip", 1),
  withState('formEnable', 'handleForm', false),
  withState('selectedText', 'handleSelectedText', ''),
  withHandlers({
    updateFeed: props => newFeed => {
      props.setPost(newFeed);
    },
    checkValidate: props => () => {
      if(props.formEnable && props.selectedText !== '') {
        props.changeEnableSubmit(true)
      }else {
        props.changeEnableSubmit(false)
      }
    }
  }),
  withHandlers(() => {
    let formRef = null;
    return {
      onRef: () => ref => (formRef = ref),
      submits: props => formData => {
        props.changeIsLoad(true);
        if (props.fileImage) {
              console.log(props.fileImage)
              const form = new FormData();
              form.append("file", props.file);
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
                        category: props.selectedText,
                        image: res.data.url
                      }
                    })
                    .then(res => {
                      if (res.data.createPost.status) {
                        props.data.refetch().then(({ data }) => {
                          props.changeIsLoad(false);
                          props.isOpen(false);
                          props.updateFeed(data.posts);
                          formRef.reset();
                        });
                      }
                    });
                
            });
        } else {
          props
            .mutate({
              variables: {
                title: formData.title,
                description: formData.description,
                category: props.selectedText,
                image: null
              }
            })
            .then(res => {
              if (res.data.createPost.status) {
                props.data.refetch().then(({ data }) => {
                  props.changeIsLoad(false);
                  props.isOpen(false);
                  props.updateFeed(data.posts);
                  formRef.reset();
                });
              }
            });
        }
      },
      handleSelected: props => selectedText => {
        props.handleSelectedText(selectedText, () => {
          props.checkValidate()
        })
      },
    };
  }),
  withHandlers({
    removePreview: props => () => {
      props.setImage(null)
    },
    handleOpenPopup: props => () => {
      props.isOpen(!props.popupOpen);
    },
    handleClosePopup: props => () => {
      if (props.popupOpen) {
        props.isOpen(false);
      }
    },
    enableSubmit: props => () => {
      props.handleForm(true, () => {
        props.checkValidate()
      });
    },
    disableSubmit: props => () => {
      props.handleForm(false, () => {
        props.checkValidate()
      });
    },
    getImage: props => (image, file) => {
      props.setImage(image);
      props.handleFile(file)
    },
    refetch: props => () => {
      props.data.refetch().then(res => {
        props.updateFeed(res.data.posts);
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
                posts(limit: 5, skip: $skip) {
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
              if (res.data.posts.length > 0) {
                let newPost = [...props.post];
                res.data.posts.map(post => newPost.push(post));
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
        nextProps.setPost(nextProps.data.posts);
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
        <div>
          <Text name="title" required value="" placeholder="Title" width='100%'/>
        </div>
        <DropDown handleChange={(selectedText) => props.handleSelected(selectedText)} defaultValue={props.defaultValue}/>
        <div>
          <TextareaWithLimitWord name='description' placeholder='Description' maxLength={300} rows={10} required/>
        </div>

        {
          props.fileImage &&        
          <div className="image-preview">
            <img src={props.fileImage} alt=''/> 
            <div onClick={props.removePreview}>
              <span className="fas fa-times" />
            </div>
          </div>
        }

        <div style={{display: "flex", justifyContent: 'space-between', alignItems:'center'}}>
          <ButtonUploadImage getImage={(image, file) => props.getImage(image, file)}/>
          {
            props.isLoading ? <ButtonComponent loading width="50px" /> : <ButtonComponent disabled={!props.canSubmit} width="50px">Post</ButtonComponent>
          }
          
        </div>
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