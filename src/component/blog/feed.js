import { compose, withHandlers, withState } from "recompose";
import ConfirmDialog from "../common/confirmDialog";
import { Content } from "./content";
import Header from "./header";
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
  withState('isLoading', 'changeLoading', false),
  withHandlers({
    isClose: props => () => {
      props.changeOpen(false);
    },
    openPopup: props => () => {
      props.changeOpen(true);
    },
    onSubmit: props => event => {
      props.changeLoading(true)
      props.mutate({
        variables: {
          id: props.post.id 
        }
      }).then(res => {
        if(res.data.deletePost.status) {
          props.refetch()
          props.changeLoading(false)
          props.changeOpen(false);
        }
      })
    },
    onCancel: props => event => {
      props.changeOpen(false);
    }
  })
);
const Feed = props => (
  <Wrapper bgColor="white" margin="20px 0px 0px 0px" borderRadius="4px" animation='fade-in 0.5s'>
    <Header post={props.post} me={props.me} openPopup={props.openPopup} />
    <Content post={props.post} />
    <ConfirmDialog
      isOpen={props.isOpen}
      isClose={props.isClose}
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
      loading={props.isLoading}
    />
  </Wrapper>
);

export default enhance(Feed);
