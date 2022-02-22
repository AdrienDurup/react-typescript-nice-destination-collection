// Imports
import PropTypes from 'prop-types';
import { useState } from 'react';

// Components
import Card from './Card';

// Styling
import './style.css';

// data
import data from './data';

const List = () => {
    const [modalDisplay, setModalDisplay]:[boolean,Function] = useState(false);
const handleShowDestinationModal=()=>{
    console.log("show modal");
    
    setModalDisplay(true);
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
