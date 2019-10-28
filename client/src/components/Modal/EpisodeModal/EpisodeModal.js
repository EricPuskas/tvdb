// DEPENDENCIES
import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
//  ACTIONS
import { hideModal } from "../../../actions/modal";
// COMPONENTS
import Modal from "../Modal";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class EpisodeModal extends React.Component {
  constructor() {
    super();
    this.state = {
      fade: false
    };
    this.listenKeyboard.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.listenKeyboard, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.listenKeyboard, false);
  }

  listenKeyboard = event => {
    event.stopPropagation();
    if (event.key === "Escape" || event.keyCode === 27) {
      this.setState(prevState => {
        return { fade: !prevState.fade };
      });
      this.props.hideModal();
    }
  };

  onOverlayClick = () => {
    this.setState(prevState => {
      return { fade: !prevState.fade };
    });
    setTimeout(() => this.props.hideModal(), 400);
  };

  onDialogClick = event => {
    event.stopPropagation();
  };

  onCloseModal = () => {
    this.setState(prevState => {
      return { fade: !prevState.fade };
    });
    setTimeout(() => this.props.hideModal(), 400);
  };

  render() {
    let overlayDiv = classNames({
      "modal-overlay-div": true,
      "fade-overlay": this.state.fade
    });

    let dialogDiv = classNames({
      "modal-dialog-div": true,
      "fade-dialog": this.state.fade
    });

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
    } = this.props.modal.props;
    let content = (
      <div>
        <Header
          header={header}
          episode={episode}
          onCloseModal={this.onCloseModal}
        />
        <Body>
          <hr />
          <div className="row">
            <div className="col-12 text-center">
              <div className="Image-container">
                <img
                  src={`https://www.thetvdb.com/banners/${image}`}
                  alt={title}
                />
              </div>
              <div>
                {overview && (
                  <>
                    <h4> Description: </h4>
                    <p>{overview}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Body>
        <Footer>
          <p>Director: {director ? director : "Unknown"}</p>
        </Footer>
      </div>
    );
    return (
      <Modal
        overlayDiv={overlayDiv}
        dialogDiv={dialogDiv}
        width={width}
        left={left}
        top={top}
        onOverlayClick={this.onOverlayClick}
        onDialogClick={this.onDialogClick}
      >
        {content}
      </Modal>
    );
  }
}

// Props Validation
EpisodeModal.propTypes = {
  modal: PropTypes.object.isRequired
};

// Pass our state from redux to props
const mapStateToProps = state => ({
  modal: state.modal
});

// Connect to the store and allow redirect via withRouter
export default connect(
  mapStateToProps,
  { hideModal }
)(EpisodeModal);
