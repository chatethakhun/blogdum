import { compose, lifecycle, withHandlers, withState } from "recompose";

import Formsy from "formsy-react-es6";
import React from "react";
import { TextareaContainer } from "../../../theme/common/input/input-theme";

const enhance = compose(
  withState("length", "decreaseMaxLength", 0),
  withState("value", "changeValue", ""),
  withHandlers({
    handleTextarea: props => evt => {
      props.changeValue(evt.target.value);
      const valueLength = evt.target.value.length;
      props.decreaseMaxLength(props.maxLength - valueLength);
      props.setValue(evt.target.value);
    }
  }),
  lifecycle({
    componentWillMount() {
      this.props.decreaseMaxLength(this.props.maxLength);
      if (this.props.defaultValue) {
        this.props.changeValue(this.props.defaultValue);
      }
    }
  })
);
const TextareaWithLimitWord = props => (
  <TextareaContainer>
    <textarea
      maxLength={props.maxLength}
      onChange={props.handleTextarea}
      rows={props.row}
      value={props.getValue() || ""}
    />
    <span>{props.length} characters remaining</span>
  </TextareaContainer>
);

export default Formsy.Wrapper(enhance(TextareaWithLimitWord));
