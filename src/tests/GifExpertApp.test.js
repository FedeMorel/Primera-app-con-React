import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import GifExpertApp from '../GifExpertApp';


describe('Pruevas en <GifExpertApp/>', ()=>{

    test('Debe demostarse correctamente el componente', ()=>{
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', ()=>{
        const categories = ['Batman', 'Hola'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})