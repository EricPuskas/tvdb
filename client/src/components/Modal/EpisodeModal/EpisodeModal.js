import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
// https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/

// Actions
import { hideModal } from "../../../actions/modal";

// Components
import Modal from "../Modal";
import ModalContent from "./ModalContent";

const EpisodeModal = ({ hideModal, modal }) => {
  const [fade, setFade] = useState(false);
  const {
    width,
    left,
    top,
    header,
    director,
    image,
    title,
    overview,
    episode
  } = modal.props;

  const listenKeyboard = useCallback(
    e => {
      e.stopPropagation();
      if (e.key === "Escape" || e.keyCode === 27) {
        setFade(!fade);
        setTimeout(() => hideModal(), 400);
      }
    },
    [fade, hideModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", listenKeyboard, false);
  }, [listenKeyboard]);

  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", listenKeyboard, false);
    };
  }, [listenKeyboard]);

  const onOverlayClick = () => {
    setFade(!fade);
    setTimeout(() => hideModal(), 400);
  };

  const onDialogClick = e => {
    e.stopPropagation();
  };

  const onCloseModal = () => {
    setFade(!fade);
    setTimeout(() => hideModal(), 400);
  };

  let overlayDiv = classNames({
    ModalOverlay: true,
    FadeOverlay: fade
  });

  let dialogDiv = classNames({
    ModalDialog: true,
    FadeDialog: fade
  });

  return (
    <Modal
      overlayDiv={overlayDiv}
      dialogDiv={dialogDiv}
      width={width}
      left={left}
      top={top}
      onOverlayClick={onOverlayClick}
      onDialogClick={onDialogClick}
    >
      <ModalContent
        episode={episode}
        header={header}
        image={image}
        title={title}
        onCloseModal={onCloseModal}
        director={director}
        overview={overview}
      />
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { hideModal }
)(EpisodeModal);
