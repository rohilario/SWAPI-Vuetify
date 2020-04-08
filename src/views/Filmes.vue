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
                  
  <v-timeline>
    <v-timeline-item
      v-for="(conteudo, i) in conteudo"
      :key="i.episode_id"
      :color="headers.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold--text`"
          v-text="conteudo.release_date"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${headers.color}--text`">
          <span
            :class="`headline font-weight-bold--text`"
            v-text="`Titulo: ${conteudo.title} - EP - ${conteudo.episode_id}`"
            >
          </span>
        </h2>
        <div>
          <span
          :class="`headline font-weight-bold--text`"
          v-text="conteudo.opening_crawl"
        ></span>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>

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
        
        
        headers: [
        
        {
          color: 'cyan',
          year: '1960',
        }
          
        ],
        
      }
  },
        created() {
            SWAPI.getFilms(films => {
              this.conteudo = films.data.results;
              console.log(this.conteudo);
            })
          },

  name: 'filmes',
  components:{

  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>








