// Imports

// Components

// Styling
import './style.css';

// Data Structure
import {Destination} from '../../../model';

const Card = ({ name, address, population, hostels, averageIncome, area }: Destination) => {

    return (
        <article className='card__container'>
            <img className='card__img' />
            <div className='card__row'>
                <div className='card__row__col'>
                    <h3 className='card__title'>{name}</h3>
                    <p className='card__text'>{address}</p>
                </div>
                {/* <ToggleUI /> */}

            </div>
            <div className='card__row --around'>
                <div className='card__row__col'>
                    <p className='card__text'>{population} M</p>
                    <p className='card__text'>Habitants</p>
                </div>
                <div className='card__row__col'>
                    <p className='card__text'>{hostels}</p>
                    <p className='card__text'>Hôtels</p>
                </div>
                <div className='card__row__col'>
                    <p className='card__text'>{averageIncome} €</p>
                    <p className='card__text'>Revenu Moy</p>
                </div>
                <div className='card__row__col'>
                    <p className='card__text'>{area}</p>
                    <p className='card__text'>km²</p>
                </div>
            </div>
        </article>
    )
};

export default Card;
