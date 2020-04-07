<template>
<!-- App.vue -->

<v-app>
    <Asside></Asside>
    <v-app-bar
    app
    clipped-left
    color="red"
    dense
    >
    <nav-bar></nav-bar>
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <router-view name="index"></router-view>
      <router-view name="planetas"></router-view>
      
    </v-container>
      <v-footer 
        color="primary lighten-1"
        padless
        
        >
        <Footer></Footer>
      </v-footer>
  </v-content>
</v-app>
</template>

<script>
import Footer from './components/layout/Footer'
import Asside from './components/layout/Asside'
//import Index from './views/Index'
import NavBar from './components/layout/NavBar'
//import SWAPI from '@/services/SWAPI';

export default {
  
  name: 'App',
  components:{
    Footer,
    Asside,
    NavBar,
//    Index
  },

  data: () => ({
      
  }),

};
</script>
