// react
import React, { useEffect } from 'react';

// comps
import List from '../List';

//modal contents
import modalComponents from '../Modal/modalComponents';

// style
import './App.css';

// modal context and component
import ModalProvider from '../Modal/ModalProvider';

// cards context, type
import {DestinationCtxt} from '../../contexts';

// hooks
import { useDestination } from '../../hooks';

function App() {
  /* 
  TODO place context definitions of non-reusable components in a context folder. Do the same for interfaces */
  const[destinationList,setDestinationList]=useDestination();
    // useEffect(()=>{

    // },[]);
   useEffect(() => {

console.log('updated',destinationList.length);
}, [destinationList]);

  return (
    <DestinationCtxt.Provider value={{destinationList,setDestinationList}}>
    <ModalProvider inners={modalComponents}>
        <List />
    </ModalProvider>
    </DestinationCtxt.Provider>

  );
}

export default App;
