// Components

// Styling
import './style.css';

const DestinationForm = () => {
    const handlePostDestination = (e) => {
        e.preventDefault();
        console.log("submit OK");
    }
    const handleCancelModal = () => {
        console.log("cancel OK");
    }
    return (
        <form className='new-destination-form' onSubmit={handlePostDestination}>
        <h2 className='new-destination-form__title'>Ajouter une destination</h2>
            <input className='new-destination-form__input' type='text' placeholder='Nom de la destination'></input>
            <input className='new-destination-form__input' type='text' placeholder='Adresse'></input>
            <input className='new-destination-form__input' type='text' placeholder='Lien de l’image'></input>
            <input className='new-destination-form__input --quarter' type='text' placeholder='Nb. Habitants'></input>
            <input className='new-destination-form__input  --quarter' type='text' placeholder='Nb. Hôtels'></input>
            <input className='new-destination-form__input  --quarter' type='text' placeholder='Revenu Moy'></input>
            <input className='new-destination-form__input  --quarter' type='text' placeholder='Superficie'></input>
            <div className='new-destination-form__btn__container'>
                <button className='new-destination-form__btn' type='button' onClick={handleCancelModal}>Annuler</button>
                <button className='new-destination-form__btn' type='submit'>Confirmer</button>
            </div>

        </form>
    )
};

export default DestinationForm;
