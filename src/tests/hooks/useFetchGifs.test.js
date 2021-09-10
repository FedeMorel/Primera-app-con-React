import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'
describe('Pruebas en el hook useFetch', ()=>{
    test('Debe de retornar el estado inicial',async()=>{

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Bartman"));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data.length).toBe(0);
        expect(loading).toBe(true);

    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async()=>{

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Bartman"));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
});