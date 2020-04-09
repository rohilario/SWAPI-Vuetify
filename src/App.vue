<template>
<!-- App.vue -->

<v-app>
      <v-app-bar app
      color="blue"
      dense
      
      class="d-flex justify-center align-center mb-6"
      >
    <nav-bar></nav-bar>
      </v-app-bar>
    
    <Asside></Asside>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <router-view name="index"></router-view>
      <router-view name="planetas"></router-view>
      <router-view name="pessoas"></router-view>
      <router-view name="filmes"></router-view>
      <router-view name="especies"></router-view>
      
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
