import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

class Modal extends React.Component {
  render() {
    const {
      width,
      left,
      top,
      overlayDiv,
      dialogDiv,
      onOverlayClick,
      onDialogClick
    } = this.props;
    return (
      <div>
        <CSSTransition
          in={true}
          classNames="modal-overlay-div"
          appear={true}
          timeout={200}
        >
          <div className={overlayDiv} />
        </CSSTransition>

        <div className="modal-content-div" onClick={() => onOverlayClick()}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="modal-dialog-div"
          >
            <div
              className={dialogDiv}
              style={{ width, left, top }}
              onClick={e => onDialogClick(e)}
            >
              <div className="modal-content">{this.props.children}</div>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default Modal;
