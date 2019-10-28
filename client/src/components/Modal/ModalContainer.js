// Dependencies //
import React from "react";
import { connect } from "react-redux";

// Modal Components //
import EpisodeModal from "./EpisodeModal/EpisodeModal";

const MODAL_COMPONENTS = {
  EPISODE_MODAL: EpisodeModal
};

const ModalContainer = props => {
  if (!props.modal.type) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[props.modal.type];
  return <SpecificModal props={props.modal.props} />;
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(ModalContainer);
