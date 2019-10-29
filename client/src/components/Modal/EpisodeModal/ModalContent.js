import React from "react";

const ModalContent = ({
  episode,
  header,
  image,
  title,
  onCloseModal,
  director,
  overview
}) => {
  const handleClosingModal = () => {
    onCloseModal();
  };
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title modal-title-center">
          Episode {episode} - {header}
        </h4>
        <button type="button" className="close" onClick={handleClosingModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer text-center">
        <p>Director: {director ? director : "Unknown"}</p>
      </div>
    </>
  );
};

export default ModalContent;
