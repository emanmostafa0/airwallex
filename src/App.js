import React, { useState }  from 'react';
import './App.css';
import Modal from "react-modal";

function App() {
  let x;
  
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  console.log("vfed");
  return (
    <div >
      <header className="App-header">
        <button onClick={toggleModal}>Open modal</button>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div>My modal dialog.</div>
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
      </header>
    </div>
  );
}

export default App;
