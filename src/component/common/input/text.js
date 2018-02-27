import { compose, withHandlers } from "recompose";

import Formsy from "formsy-react-es6";
import React from "react";

const enhance = compose(
  withHandlers({
    changeValue: props => event => {
      props.setValue(event.target.value);
    }
  })
);

const Text = props => (
  <input
    placeholder={props.placeholder}
    name={props.name}
    type={props.type || "text"}
    id={props.id}
    onChange={props.changeValue}
    value={props.getValue()}
  />
);

export default Formsy.Wrapper(enhance(Text));
