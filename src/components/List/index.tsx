// Imports
import PropTypes from 'prop-types';

// Components
import Card from './Card';

// Styling
import './style.css';

// data
import data from './data';

const List = () => {

    return (

        <>
            <div className='list__header'>
                <h2 className='list__title'>Destinations</h2>
                <button type='button' className='list__add'>+ Ajouter</button>
            </div>
            <div className='cards-container'>
                {data.map((el) => (
                    <Card {...el} />
                ))}
            </div>

        </>


    )
};

List.propTypes = {

};

export default List;
