import Router from 'vue-router'
import Vue from 'vue'
//import Page1 from './views/Page1.vue'
//import Page2 from './views/Page2.vue
import Index from './views/Index.vue'

Vue.use(Router)
    

export default new Router({
    routes:[
        {
            path:'/',
            
            components:{'index': Index},

        }
    ]
})