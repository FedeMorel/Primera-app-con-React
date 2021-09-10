import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');
    const category = 'batman'


describe('Pruebas en <GifGrid/>', ()=>{


    test('Debe demostarse correctamente el componente', ()=>{
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe demostrar items cuando se cargan imágenes con useFetchGifs', ()=>{

        const gifs=[{
            id: 'ABC',
            img: 'https://localhost/url/prueba.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        expect(wrapper).toMatchSnapshot();
    });

});