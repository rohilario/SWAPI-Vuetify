import axios from 'axios';
const urlBase = 'https://swapi.co/api/';

export default {

    headers: {
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded'
    },

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
    },
    getPeoples: (callback) => {
        const urlPeople = urlBase + 'people/';
        console.log(urlPeople)
        axios.get(urlPeople).then((people) => {   
            if (callback) {
                callback(people);
            }
            
        })
    },
    getFilms: (callback) => {
        const urlFilms = urlBase + 'films/';
        console.log(urlFilms)
        axios.get(urlFilms).then((films) => {   
            if (callback) {
                callback(films);
            }
            
        })
    },
    getEspecies: (callback) => {
        const urlEspecies = urlBase + 'species/';
        console.log(urlEspecies)
        axios.get(urlEspecies).then((especies) => {   
            if (callback) {
                callback(especies);
            }
            
        })
    }
}