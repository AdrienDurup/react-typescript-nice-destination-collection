// React Imports
import { BaseSyntheticEvent, useContext, useEffect, useRef } from 'react';
import { DestinationContextI, DestinationCtxt } from '../../../contexts';
import {Destination, BaseObject, DestinationData} from '../../../model';

// Components

// context 
import modalContext from '../context';
// Styling
import './style.css';

//helper
import { formDataToInstance } from '../../../tools';

const DestinationForm = () => {
    const { setModalDisplay, modalDisplay } = useContext(modalContext);
    const { destinationList, setDestinationList } = useContext<DestinationContextI>(DestinationCtxt);

    const handlePostDestination = (e: BaseSyntheticEvent): void => {
        e.preventDefault();
        const formData: FormData = new FormData(e.target);
        // const test:FormData=new FormData();
        // test.append('test','test');
        const newDestination: Destination = formDataToInstance<DestinationData>(formData,DestinationData,'new-destination-');
              console.log("submit OK", newDestination);

        if (setDestinationList && destinationList) {
            setDestinationList([...destinationList,newDestination]);

        };
        handleCancelModal();
    }
    const handleCancelModal = (): void => {
        if (setModalDisplay) setModalDisplay(false);
    }
    let firstInputDOM = useRef<HTMLInputElement>(null);

    useEffect(() => {
        /* we set focus on first input */
        if (modalDisplay && firstInputDOM.current) firstInputDOM.current.focus();
    },
        [modalDisplay]);

    return (
        <form className='new-destination-form' onSubmit={handlePostDestination}>
            <h2 className='new-destination-form__title'>Ajouter une destination</h2>
            <input
                className='new-destination-form__input'
                type='text'
                placeholder='Nom de la destination'
                ref={firstInputDOM}
                required
                name='new-destination-name'
                value='Lille'
            />
            <input className='new-destination-form__input' type='text' required placeholder='Adresse' name='new-destination-address' value='Grand Place' />
            <input className='new-destination-form__input' type='text' required placeholder='Lien de l’image' name='new-destination-img' value='http://url/' />
            <input className='new-destination-form__input --quarter' required type='text' placeholder='Nb. Habitants' name='new-destination-pop' value='12' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Nb. Hôtels' name='new-destination-hostels' value='123' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Revenu Moy' name='new-destination-income' value='34000' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Superficie' name='new-destination-area' value='345' />
            <div className='new-destination-form__btn__container'>
                <button className='new-destination-form__btn' type='button' onClick={handleCancelModal}>Annuler</button>
                <button className='new-destination-form__btn' type='submit' >Confirmer</button>
            </div>

        </form>
    )
};

export default DestinationForm;
