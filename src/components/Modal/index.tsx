// Imports
import React from 'react';

// Components

// Styling

import './style.css';

//props interface
interface ModalProps {
children:React.ReactNode,
}

const Modal = ({children}:ModalProps ) => {

    return (
        <div className='modal__overlay' >
            <div className='modal__main'>
                {children}
            </div>
        </div>
    )
};

export default Modal;
