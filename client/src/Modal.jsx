import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  handleClick = e => {
    e.preventDefault();

    this.props.hideModal();
  };

  render() {
    const { show, errorMsg, successMsg } = this.props;
    const showHideClassName = show
      ? 'modal display-block'
      : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="modal-title">
            {successMsg ? <h5>Tack!</h5> : <h5>Oj!</h5>}
          </div>
          <div className="modal-text">{successMsg || errorMsg}</div>
          <div className="modal-button-wrapper">
            <button name="ok" onClick={this.handleClick}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
