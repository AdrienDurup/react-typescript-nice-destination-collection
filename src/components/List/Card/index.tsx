// Components
import SwitchUI from '../../SwitchUI';
// Styling
import './style.css';

// Data Structure
import {Destination} from '../../../model';
import { useState } from 'react';

const Card = ({ img, name, address, population, hostels, income, area }: Destination) => {
const [switchVal,setSwitchVal]=useState(false);
/* 
TODO connect SwitchUI to destination List context : toggle value is currently not stored in state or local storage */
    return (
        <article className='card__container'>
            <img className='card__img' src={img} alt={name}/>
            <div className='card__row'>
                <div className='card__row__col'>
                    <h3 className='card__title'>{name}</h3>
                    <p className='card__text'>{address}</p>
                </div>
                <SwitchUI value={switchVal} setValue={setSwitchVal}/>

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
                    <p className='card__text'>{income} €</p>
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
