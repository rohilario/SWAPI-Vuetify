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

      <Index>
        <div class="md-layout-item md-size-33" v-for="conteudo in conteudo" :key="conteudo.id">
      <quadrinho
        :titulo="conteudo.count"
        :descricao="conteudo.description"
      >
    </quadrinho>
        </div>
    </Index>

      <router-view></router-view>
      
    </v-container>
  </v-content>

    <v-footer app
    color="primary lighten-1"
    padless
  >
    <Footer></Footer>
  </v-footer>
</v-app>
</template>

<script>
import Footer from './components/layout/Footer'
import Asside from './components/layout/Asside'
import Index from './views/Index'
import NavBar from './components/layout/NavBar'
import SWAPI from '@/services/SWAPI';

export default {
  
  name: 'App',
  components:{
    Footer,
    Asside,
    NavBar,
    Index
  },

  data: () => ({
      conteudo: []
  }),
created() {
    SWAPI.getAllComics(comics => {
      this.conteudo = comics.data;
    })
  }

};
</script>
