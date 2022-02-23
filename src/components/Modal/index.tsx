// Imports
import React, { useContext, SyntheticEvent, useEffect, useRef, RefObject, KeyboardEventHandler } from 'react';
import DestinationForm from './DestinationForm';

// Components

//context
import ModalContext from './context';

// Styling

import './style.css';

//props interface
interface ModalProps {
    inner: string,
    display: boolean,
    components: { // object containing components that can be injected in modal
        [key: string]: React.FunctionComponent
    },
}

const Modal = ({ inner, components, display }: ModalProps) => {
    const { setModalDisplay, setModalInner } = useContext(ModalContext);
    console.log("INNER AND DIRPLAY", inner, display);

    useEffect(() => {
        const handleCloseByKB = (e: KeyboardEvent) => {
            console.log(e);
            if (setModalDisplay && e.key==='Escape') setModalDisplay(false);
        }
        const doc=document;
        doc.addEventListener('keyup',handleCloseByKB);
        return () => {
            doc.removeEventListener('keyup',handleCloseByKB);
        }
    }, []);

    const handleCloseModal = (e: ) => {
        console.log(e);
        if (setModalDisplay && e.currentTarget.id === 'app-main-modal') setModalDisplay(false);
    };


    /* we get inner component from a dictionary 'ComponentName':ComponentFunction
    then we pass component to a variable */
    const FormInstance = components[inner];
    return (
        // <div className='modal__overlay' onCslick={handleCloseModal}>
        <div className={display ? 'modal__overlay' : 'modal__overlay --display-none'} id='app-main-modal' onClick={handleCloseModal}>
            <div className='modal__main'>
                <FormInstance />
            </div>
        </div>
    )
};

export default Modal;
