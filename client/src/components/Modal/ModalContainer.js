// Dependencies //
import React from "react";
import { connect } from "react-redux";

// Modal Components //
import EpisodeModal from "./EpisodeModal/EpisodeModal";

const MODAL_COMPONENTS = {
  EPISODE_MODAL: EpisodeModal
};

const ModalContainer = ({ modal: { type, props } }) => {
  if (!type) return null;

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent props={props} />;
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(ModalContainer);
