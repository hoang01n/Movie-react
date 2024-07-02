import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import "boxicons";

const Modal = (props) => {
  const [active, setActive] = useState(false);
  // const onCloseModal = useRef(null);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
  // const RemoveModal = () => {
  //   onCloseModal.current.parentNode.classList.remove("active");
  //   if (props.onClose) props.onClose();
  // };

  return (
    <div
      className={`modal ${active ? "active" : ""}`}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <div
      ref={contentRef}
      className="modal__content"
      // onClick={closeModal}
    >
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <box-icon color="white" name="x"></box-icon>
      </div>
    </div>
  );
};
ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
