import { shallow} from 'enzyme';
import GifGridItem from "../../components/GIfGridItem"

describe('Pruebas en <GifGridItem />', ()=>{

    const title = 'Un titulo';
    const img = 'hpps://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} img={img}/>);


    test('debe de mostrar el componenete correctamete', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', ()=>{
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);
    });

    test('debe de tener la imgagen igual al url y alt de los props', ()=>{
        const image = wrapper.find('img');
        expect(image.prop('src')).toBe(img);
        expect(image.prop('alt')).toBe(title);
    });

    test('debe de tener la clase animate__fadeIn', ()=>{
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn')).toBe(true);
        
    });
    
});