<template>
    
      
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
                      Pessoas
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
                      :items="conteudo"
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
        ],
      }
  },
        created() {
            SWAPI.getPeoples(pessoas => {
              this.conteudo = pessoas.data.results;
              this.desserts = pessoas.data.results;
              console.log(pessoas.data.results);
            })
          },

  name: 'pessoas',
  components:{

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>