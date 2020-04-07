<template>
<div class="">
  <div class="wrapper">
                                    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
                                                  <!-- Main content -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
                <tr v-for="conteudo in conteudo" v-bind:key="conteudo.id">
                  <td>{{ conteudo.name }}</td>
                </tr>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import SWAPI from '@/services/SWAPI';

export default {
  
  name: 'App',
  components:{
  

  },

  data: () => ({
      conteudo: [],
      
        headers: [
          {
            text: 'Nome do Planeta',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Rotacao em Horas',
            align: 'start',
            sortable: false,
            value: 'rotation_period',
          },
         
        ],
        desserts: [
          
        ],
      
      
  }),
 
        created() {
            SWAPI.getAllPlanets(planets => {
              this.conteudo = planets.data.results;
              this.desserts = planets.data.results;
              
              console.log(planets.data.results);
            })
          }

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>







