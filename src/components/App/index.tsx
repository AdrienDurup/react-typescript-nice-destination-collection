// react
import React from 'react';
import { useState, useContext } from 'react';

// comps
import List from '../List';
import Modal from '../Modal';

//modal contents
import modalComponents from '../Modal/modalComponents';

// style
import './App.css';

// modal context
import ModalContext, { useModalContext } from '../Modal/context';
import ModalProvider from '../Modal/ModalProvider';

function App() {

  // const {modalDisplay, setModalDisplay,modalInner, setModalInner}=useContext(ModalContext);

  return (
    <>
      {/* we provide modal setters in order to display or populate the modal from anywhere in the app.
    value will never change : components using these setters won’t re-render */}
      {/* <ModalContext.Provider value={{ setModalDisplay, setModalInner }} > */}
      {/* <ModalContext.Provider value={{display:true,inner:'DestinationForm'}}> */}
      <ModalProvider inners={modalComponents}>
        < List /> 
      </ModalProvider>

      {/* <Modal display={modalDisplayStatePair} form='DestinationForm' components={modalComponents} /> */}
      {/* </ModalContext.Provider> */}
    </>

  );
}

export default App;
