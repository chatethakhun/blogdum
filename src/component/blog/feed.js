import { compose, withHandlers, withState } from "recompose";
import { CenterComponent } from '../common/center-component/centercomponent'
import ConfirmDialog from "../common/confirmDialog";
import { Content } from "./content";
import Header from "./header";
import Popup from "../../component/common/pop-up/pop-up";
import React from "react";
import { Wrapper } from "../../theme/common/wrapper/wrapper";
import gql  from 'graphql-tag'
import  { graphql, withApollo } from "react-apollo";

const deletePost = gql`
  mutation deletePost($id: ID) {
    deletePost(id: $id) {
      status
      message
    }
  }
`

const enhance = compose(
  graphql(deletePost),
  withApollo,
  withState("isOpen", "changeOpen", false),
  withHandlers({
    isClose: props => () => {
      props.changeOpen(false);
    },
    openPopup: props => () => {
      props.changeOpen(true);
    },
    onSubmit: props => event => {
      props.changeOpen(false);
      props.mutate({
        variables: {
          id: props.post.id 
        }
      }).then(res => {
        if(res.data.deletePost.status) {
          window.location.reload()
        }
      })
    },
    onCancel: props => event => {
      props.changeOpen(false);
    }
  })
);
const Feed = props => (
  <Wrapper bgColor="white" margin="20px 0px" borderRadius="4px">
    <Header post={props.post} me={props.me} openPopup={props.openPopup} />
    <Content post={props.post} />
    <ConfirmDialog
      isOpen={props.isOpen}
      isClose={props.isClose}
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
    />
  </Wrapper>
);

export default enhance(Feed);
