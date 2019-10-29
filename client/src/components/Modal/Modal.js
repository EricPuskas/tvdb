import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

const Modal = ({
  width,
  left,
  top,
  overlayDiv,
  dialogDiv,
  onOverlayClick,
  onDialogClick,
  children
}) => {
  const handleOverlay = () => {
    onOverlayClick();
  };
  return (
    <div>
      <CSSTransition
        in={true}
        classNames="ModalOverlay"
        appear={true}
        timeout={200}
      >
        <div className={overlayDiv} />
      </CSSTransition>

      <div className="ModalContentContainer" onClick={handleOverlay}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames="ModalDialog"
        >
          <div
            className={dialogDiv}
            style={{ width, left, top }}
            onClick={e => onDialogClick(e)}
          >
            <div className="ModalContent">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Modal;
