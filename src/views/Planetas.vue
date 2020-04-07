<template>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col
              sm="0"
              >
                      
            </v-col>
            <v-col
              sm="12"
              >
              <v-card
                class="pa-2"
                outlined
                tile
                >
                <v-card-title>
                      Planetas
                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        >
                      </v-text-field>
                    </v-card-title>
                    <v-data-table
                      :sort-by="desserts"
                      :sort-desc="[false, true]"
                      :headers="headers"
                      :items="desserts"
                      :search="search"
                      :items-per-page="5"
                      multi-sort
                      class="elevation-1"
                      >
                    </v-data-table> 
              </v-card>         
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-card>
</template>



<script>
import SWAPI from '@/services/SWAPI';

export default {
    data(){
    
      return{
        conteudo:[],
        search: '',
      
        headers: [
          {
            text: 'Nome do Planeta',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          {
            text: 'Rotacao em Horas',
            align: 'start',
            sortable: true,
            value: 'rotation_period',
          },
         
        ],
        desserts: [
          
        ],
      }
  },
        created() {
            SWAPI.getAllPlanets(planets => {
              this.conteudo = planets.data.results;
              this.desserts = planets.data.results;
              console.log(planets.data.results);
            })
          },

  name: 'planetas',
  components:{

  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>








