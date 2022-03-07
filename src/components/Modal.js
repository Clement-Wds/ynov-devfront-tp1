import React from "react";

const Modal = (props) => {
  return (
    <>
      {props.isActive ? (
        <>
          <div className="overlay" onClick={props.closefunction}></div>
          <div className="modal">
            <div className="modal-header">
              <div className="close-cross" onClick={props.closefunction}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="modal-title">
              <h2>{props.title}</h2>
            </div>
            <div className="modal-content">{props.children}</div>
            <div className="modal-actions">
              <button className="button button-dark" onClick={props.closefunction}>
                Annuler
              </button>
              <button className="button button-primary" onClick={props.validateFunction}>
                Valider
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
