import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', ()=>{

    test('Debe de traer 10 elementos', async()=>{
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('Debe de ser el array que devuelve 0 si no se le pasa el parametro', async()=>{
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });

});