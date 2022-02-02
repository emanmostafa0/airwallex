import React from 'react';
import { func, bool, node } from "prop-types";
import Modal from 'react-modal';
import { StyledModal, StyledOverlay } from './style';



export function Dialog({open, toggleModal, children }) {
  
  return (
    <Modal 
      isOpen={open}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      overlayClassName= 'overlay-modal'
      className= 'modal'
      contentElement={(props, children) => <StyledModal {...props}>{children}</StyledModal>}
      overlayElement={(props, contentElement) => <StyledOverlay {...props}>{contentElement}</StyledOverlay>}
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      {children}
    </Modal>
   
    
  );
}



Dialog.propTypes = {
  toggleModal: func,
  open: bool,
  children: node
};
