import { PopupContainer } from "../../../theme/common/pop-up/pop-up-theme";
import React from "react";
import { compose } from "recompose";

const enhance = compose();

const Popup = props => (
  <PopupContainer display={props.isOpen ? "block" : "none"}>
    <div className="close">
      <span className="fas fa-times" onClick={props.isClose} />
    </div>
    {props.children}
  </PopupContainer>
);

export default enhance(Popup);
