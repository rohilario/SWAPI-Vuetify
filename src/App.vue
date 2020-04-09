<template>
<!-- App.vue -->

<v-app>
  <v-app-bar app
      clipped-left
      dark
      dense
      class="d-flex justify-center align-center mb-6"
      >
    <nav-bar></nav-bar>
      </v-app-bar>
  <v-layout fill-height>
  <v-navigation-drawer
    app
      expand-on-hover
      clipped
      dark
         >
    <Asside></Asside>     
  </v-navigation-drawer>
  <v-navigation-drawer
      dark
      >
        <AssideRight></AssideRight>
  </v-navigation-drawer>
      

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container>

      <router-view name="index"></router-view>
      <router-view name="planetas"></router-view>
      <router-view name="pessoas"></router-view>
      <router-view name="filmes"></router-view>
      <router-view name="especies"></router-view>
      
    </v-container>
  </v-content>
  </v-layout>
  <v-footer 
        color="primary lighten-1"
        
        >
        <Footer></Footer>
      </v-footer>
</v-app>
</template>

<script>
import Footer from './components/layout/Footer'
import Asside from './components/layout/Asside'
//import Index from './views/Index'
import NavBar from './components/layout/NavBar'
import AssideRight from './components/layout/AssideRight'
//import SWAPI from '@/services/SWAPI';

export default {
  
  name: 'App',
  components:{
    Footer,
    Asside,
    NavBar,
    AssideRight,
//    Index
  },

  data: () => ({
      
  }),

};
</script>
<style lang="scss" scoped>

.v-content{
  padding:48px 0px 0px 0px !important;
  }
</style>