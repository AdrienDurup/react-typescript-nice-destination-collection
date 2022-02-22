// Imports
import React, { useState } from 'react';

// Components

// Styling

import './style.css';

//props interface
interface ModalProps {
    children?: React.ReactNode | undefined,
    // display?: boolean,
    // validator?: ,
}

const Modal = ({ children }: ModalProps) => {
    const [modalDisplay, setModalDisplay]:[boolean,Function] = useState(false);
    const handleCloseModal = () => {
        setModalDisplay(false);
    };
    return (
        <div className={modalDisplay?'modal__overlay':'modal__overlay --display-none'} onClick={handleCloseModal}>
            <div className='modal__main'>
                {children}
            </div>
        </div>
    )
};

export default Modal;
