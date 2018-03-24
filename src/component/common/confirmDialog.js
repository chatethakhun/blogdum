import { compose, lifecycle, withHandlers } from "recompose";

import { ButtonComponent } from "./button/button";
import { Container } from "../../theme/common/confirm-dialog/confirm-dialog-theme";
import Popup from "./pop-up/pop-up";
import React from "react";
import ReactDOM from "react-dom";

const enhance = compose(
  withHandlers({
    handleScroll: props => event => {
      if (props.isOpen) {
        event.preventDefault();
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      //ßconsole.log("props ===>", this);
      ReactDOM.findDOMNode(root).addEventListener(
        "wheel",
        this.props.handleScroll,
        false
      );
    }
  })
);
export const ConfirmDialog = props => (
  <Popup isOpen={props.isOpen} isClose={props.isClose}>
    <Container>
      <div>
        <div className="label">
          <p>Are you sure?</p>
        </div>
        <div className="button">
          {!props.loading ? (
            <ButtonComponent width="100px" onClick={props.onSubmit}>
              OK
            </ButtonComponent>
          ) : (
            <ButtonComponent loading width="100px" />
          )}
          <ButtonComponent width="100px" onClick={props.onCancel}>
            Cancel
          </ButtonComponent>
        </div>
      </div>
    </Container>
  </Popup>
);

export default enhance(ConfirmDialog);
