// Imports
import { useContext } from 'react';

// Components
import Card from './Card';

// context
import ModalContext from '../Modal/context';
import { DestinationCtxt } from '../../contexts';

// Styling
import './style.css';

const List = () => {
    /* context for displaying and populating modal window */
    const { setModalDisplay, setModalInner } = useContext(ModalContext);
    /* context for destination list */
    const { destinationList } = useContext(DestinationCtxt);
    console.log(destinationList);

    const handleShowDestinationModal = () => {
        if (setModalInner) setModalInner('DestinationForm');
        if (setModalDisplay) setModalDisplay(true);
    };
    return (
        <>
            <div className='list__page-layout'>
            <div className='list__header'>
                <h2 className='list__title'>Destinations</h2>
                <button type='button' className='list__add' onClick={handleShowDestinationModal}>+ Ajouter</button>
            </div>
                {destinationList
                    && destinationList.length > 0
                    && destinationList.map((el) => el ? (<Card {...el} />) : '')}
            </div>
        </>


    )
};

List.propTypes = {

};

export default List;
