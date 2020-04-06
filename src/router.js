import Router from 'vue-router'
import Vue from 'vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'

Vue.use(Router)
    

export default new Router({
    routes:[
        {
            path:'/page1',
            components:{'page': Page1},
        },
        {
            path:'/page2',
            components:{'page': Page2}
        }
    ]
})