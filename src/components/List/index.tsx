// Imports
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';

// Components
import Card from './Card';

// context
import ModalContext from '../Modal/context';

// Styling
import './style.css';

// data
import data from './data';

import DestinationForm from '../Modal/DestinationForm';



const List = () => {

const {setModalDisplay,setModalInner}=useContext(ModalContext);

    const handleShowDestinationModal = () => {
        if (setModalInner) setModalInner('DestinationForm');
        if (setModalDisplay) setModalDisplay(true);
        };
    return (
        <>
            <div className='list__header'>
                <h2 className='list__title'>Destinations</h2>
                <button type='button' className='list__add' onClick={handleShowDestinationModal}>+ Ajouter</button>
            </div>
            <div className='cards-container'>
                {data.map((el) => (
                    <Card {...el} key={el.id} />
                ))}
            </div>
        </>


    )
};

List.propTypes = {

};

export default List;
