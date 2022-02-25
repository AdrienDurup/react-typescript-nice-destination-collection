// Imports
import React, { useContext, useEffect, BaseSyntheticEvent, FunctionComponent} from 'react';

//context
import ModalContext from './context';

// Styling
import './style.css';


//props interface
interface ModalProps {
    display: boolean,
}

const Modal:FunctionComponent<ModalProps> = ({ children, display }) => {
    const { setModalDisplay } = useContext(ModalContext);
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

    const handleCloseModal = (e:BaseSyntheticEvent) => {
        // const element:Element=e.target;
        console.log(e.target.id);
        if (setModalDisplay && e.target.id === 'app-main-modal') setModalDisplay(false);
    };


    /* we get inner component from a dictionary 'ComponentName':ComponentFunction
    then we pass component to a variable */
    return (
        // <div className='modal__overlay' onCslick={handleCloseModal}>
        <div className={display ? 'modal__overlay' : 'modal__overlay --display-none'} data-id='app-main-modal' id='app-main-modal' onClick={handleCloseModal}>
            <div className='modal__main'>
                {children}
            </div>
        </div>
    )
};

export default Modal;
