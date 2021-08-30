import { API_KEY } from '../components/API_KEY';

export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${API_KEY}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(({id, title, images}) =>{
    return{
        id: id,
        title: title,
        img: images?.downsized_medium.url
    }
    });
    return gifs;
}