import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, getByText } from '@testing-library/react';
import Card from '../components/List/Card';
import { CardData } from '../model';

describe('card component tests', () => {
    test('rendering without crashing', () => {
        const props = {};
        const myDiv: HTMLDivElement = document.createElement('div');
        ReactDOM.render(<Card {...props} />, myDiv);
    });
    // const sample = {
    //     img: '/paris.jpg',
    //     name: 'Paris2',
    //     address: 'Pl. de l\'Hôtel de Ville, 75004 Paris',
    //     population: '2.1',
    //     hostels:'7500',
    //     income: '50000',
    //     area: '105.4',
    //     id: 'test-id',
    //     key: 'test-id',
    // }
    
    const sample=new CardData('/paris.jpg',
    'Paris2',
    'Pl. de l\'Hôtel de Ville, 75004 Paris',
    2.1,
    7500,
    50000,
    105.4,);

    // sample.hostels=''; // error test OK


    /* we check if CardData instance fills card as intended : with texts */
    test('Card is filled with text', () => {
        const { debug } = render(<Card {...sample} />);
        debug();
        const contents = screen.getAllByTestId(/test-card-text/);
           for (const el of contents) {
        expect(el.textContent).not.toBe('');
        }
    });
    /* we check if CardData instance fills card as intended : with image url */
    test('Card has image url',()=>{
        const { debug } = render(<Card {...sample} />);
        debug();
        const img = screen.getByTestId(/test-card-img/);
        expect(img.getAttribute('src')).not.toBe('');
    });
})