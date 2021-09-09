import { shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', ()=>{

    const category = 'batman'

    test('Debe demostarse correctamente el componente', ()=>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe demostrar items cuando se cargan imágenes con useFetchGifs', ()=>{

        const gifs=[{
            id: 'ABC',
            url: 'https://localhost/url/prueba.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        
    });

});