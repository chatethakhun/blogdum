import { compose, withHandlers } from "recompose";

import { HeaderPost } from "../../theme/blog/blog-theme";
import React from "react";
import moment from "moment";

const enhance = compose(
  withHandlers({
    onEdit: props => event => {
      event.preventDefault();
      alert("edit");
    },
    onDelete: props => event => {
      event.preventDefault();
      console.log(props);
      props.openPopup();
    }
  })
);

const Header = props => (
  <HeaderPost>
    <div className="title">
      <p>{props.post.title}</p>
    </div>
    <div className="profile">
      <div className="image">
        <img
          src={props.me && props.me.imageUrl}
          alt={props.me && props.me.fname}
        />
      </div>
      <div className="name">
        <ui>
          <li>{`${props.me && props.me.fname} ${props.me &&
            props.me.lname}`}</li>
          <li>
            {moment(props.post.create_at).format("MMMM Do YYYY, h:mm:ss a")}
          </li>
        </ui>
      </div>
      <div className="edit-delete">
        <button onClick={props.onEdit}>
          <i className="fas fa-pencil-alt" />
        </button>
        <button onClick={props.onDelete}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  </HeaderPost>
);

export default enhance(Header);
