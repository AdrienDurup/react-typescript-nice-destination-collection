// react
import React from 'react';
import { useState } from 'react';

// comps
import List from '../List';
import Modal from '../Modal';

//modal contents
import modalComponents from '../Modal/modalComponents';

// style
import './App.css';

// modal context
import ModalContext from '../Modal/context';

function App() {
  const [modalDisplay, setModalDisplay] = useState(true);
  const [modalInner, setModalInner] = useState('DestinationForm');
  console.log("modalInner",modalInner);
  
  return (
    <>
      <ModalContext.Provider value={{ setModalDisplay, setModalInner }} >
      {/* <ModalContext.Provider value={{display:true,inner:'DestinationForm'}}> */}
      < List />
      <Modal components={modalComponents} inner={modalInner} display={modalDisplay} />
      {/* <Modal display={modalDisplayStatePair} form='DestinationForm' components={modalComponents} /> */}
    </ModalContext.Provider>
    </>

  );
}

export default App;
