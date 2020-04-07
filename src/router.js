import Router from 'vue-router'
import Vue from 'vue'
import Planetas from './views/Planetas.vue'
//import Page2 from './views/Page2.vue
import Index from './views/Index.vue'

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
        }
    ]
})