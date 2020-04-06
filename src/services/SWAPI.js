import axios from 'axios';
const urlBase = 'https://swapi.co/api/';

export default {
    getAllComics: (callback) => {
        const urlComics = urlBase + 'planets/';
        console.log(urlComics)
        axios.get(urlComics).then((comics) => {
            console.log(comics.data)
            if (callback) {
                callback(comics);
                
            }
            
        })
    }
}