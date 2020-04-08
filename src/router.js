import Router from 'vue-router'
import Vue from 'vue'
import Planetas from './views/Planetas'
import Pessoas from './views/Pessoas'
import Filmes from './views/Filmes'
import Especies from './views/Especies'
import Index from './views/Index'

Vue.use(Router)
    

export default new Router({
    routes:[
        {
            path:'/index',
            
            components:{'index': Index},

        },
        {
            path:'/planetas',
            
            components:{'planetas': Planetas},
        },
        {
            path:'/pessoas',
            
            components:{'pessoas': Pessoas},
        },
        {
            path:'/filmes',
            
            components:{'filmes': Filmes},
        },
        {
            path:'/especies',
            
            components:{'especies': Especies},
        }
        
    ]
})