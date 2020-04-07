import axios from 'axios';
const urlBase = 'https://swapi.co/api/';

export default {
    getAllPlanets: (callback) => {
        const urlPlanets = urlBase + 'planets/';
        console.log(urlPlanets)
        axios.get(urlPlanets).then((planets) => {
            //console.log(comics.data)
            if (callback) {
                callback(planets);
                
            }
            
        })
    },

    getMenu: (callback) => {
        const urlMenu = urlBase;
        console.log(urlMenu)
        axios.get(urlMenu).then((menu) => {   
            if (callback) {
                callback(menu);
                
            }
            
        })
    }
}