import Modal from "react-modal";
import React from "react";

class ModalComponent extends React.Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.isClose}
        className={{
          base: `${this.props.baseClassName}`,
          afterOpen: `${this.props.afterOpenClassName}`
          //beforeClose: 'myClass_before-close'
        }}
      >
        {this.props.children}
      </Modal>
    );
  }
}

export default ModalComponent;
