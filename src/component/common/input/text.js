import { compose, withHandlers, withState } from "recompose";

import Formsy from "formsy-react-es6";
import React from "react";
import { TextInput } from "../../../theme/common/input/input-theme";

const enhance = compose(
  withState("value", "changeValue", ""),
  withHandlers({
    changeValue: props => event => {
      props.changeValue(event.target.value);
      props.setValue(event.target.value);
    }
  })
);

const Text = props => (
  <TextInput
    placeholder={props.placeholder}
    name={props.name}
    type={props.type || "text"}
    id={props.id}
    onChange={props.changeValue}
    value={props.getValue() ? props.getValue() : props.value}
    width={props.width}
  />
);

export default Formsy.Wrapper(enhance(Text));
