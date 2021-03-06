// React Imports
import { BaseSyntheticEvent, useContext, useEffect, useRef } from 'react';
import { DestinationContextI, DestinationCtxt } from '../../contexts';
import { Destination, DestinationData } from '../../model';

// context 
import modalContext from '../Modal/context';
// Styling
import './style.css';

//helper
import { formDataToInstance } from '../../tools';

const DestinationForm = () => {
    const { setModalDisplay, modalDisplay } = useContext(modalContext);
    const { destinationList, setDestinationList } = useContext<DestinationContextI>(DestinationCtxt);

    /*form submit handler */
    const handlePostDestination = (e: BaseSyntheticEvent): void => {
        e.preventDefault();
        /* we create a formData object as we didn’t make controlled inputs. */
        const formData: FormData = new FormData(e.target);
        /* we use a helper which convert a form data to instance of given class, and we format field name, deleting a prefix if provided, so that field name and 
        instance property are identical*/
        const newDestination: Destination = formDataToInstance<DestinationData>(formData, DestinationData, 'new-destination-');
        console.log("submit OK", newDestination);
        /* we add new destination to destination list in state */
        if (setDestinationList && destinationList) {
            const mergedList = [...destinationList, newDestination];
            setDestinationList(mergedList);
            /* we save the list to local storage */
            localStorage.setItem('my-test-app', JSON.stringify(mergedList));

        };
        /* we close modal */
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
            />
            <input className='new-destination-form__input' type='text' required placeholder='Adresse' name='new-destination-address'/>
            <input className='new-destination-form__input' type='text' required placeholder='Lien de l’image' name='new-destination-img'/>
            <input className='new-destination-form__input --quarter' required type='text' placeholder='Nb. Habitants' name='new-destination-population'/>
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Nb. Hôtels' name='new-destination-hostels'/>
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Revenu Moy' name='new-destination-income'/>
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Superficie' name='new-destination-area'/>
            {/* FOR TEST PURPOSE WITH STATIC VALUES */}
            {/* <input
                className='new-destination-form__input'
                type='text'
                placeholder='Nom de la destination'
                ref={firstInputDOM}
                required
                name='new-destination-name'
                value='Lille'
            />
            <input className='new-destination-form__input' type='text' required placeholder='Adresse' name='new-destination-address' value='Grand Place' />
            <input className='new-destination-form__input' type='text' required placeholder='Lien de l’image' name='new-destination-img' value={`${process.env.REACT_APP_SERVER}/Lille_vue_gd_place.jpeg`} />
            <input className='new-destination-form__input --quarter' required type='text' placeholder='Nb. Habitants' name='new-destination-population' value='12' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Nb. Hôtels' name='new-destination-hostels' value='123' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Revenu Moy' name='new-destination-income' value='34000' />
            <input className='new-destination-form__input  --quarter' required type='text' placeholder='Superficie' name='new-destination-area' value='345' /> */}
            <div className='new-destination-form__btn__container'>
                <button className='new-destination-form__btn' type='button' onClick={handleCancelModal}>Annuler</button>
                <button className='new-destination-form__btn' type='submit' >Confirmer</button>
            </div>

        </form>
    )
};

export default DestinationForm;
