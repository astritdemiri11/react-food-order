import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  const closeHandler = (event) => {
    if (onClose) {
      onClose(event);
    }
  };

  return <div className={classes.backdrop} onClick={closeHandler} aria-hidden="true" />;
};

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose, children }) => {
  const closeHandler = (event) => {
    if (onClose) {
      onClose(event);
    }
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={closeHandler} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

Backdrop.defaultProps = {
  onClose: null,
};

ModalOverlay.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

ModalOverlay.defaultProps = {
  children: null,
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node),
};

Modal.defaultProps = {
  onClose: null,
  children: null,
};

export default Modal;
