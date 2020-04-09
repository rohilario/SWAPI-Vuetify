<template>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col
              sm="8"
            >
              <v-card
                class="pa-2"
                outlined
                tile
                >  
              <v-row align="center">
                <v-item-group
                      v-model="window"
                      class="shrink mr-6"
                      mandatory
                      tag="v-flex"
                      >
                      <v-item
                        v-for="(conteudo, i) in conteudo"
                        :key="i.episode_id"
                        v-slot:default="{ active, toggle }"
                        >
                        <div>
                          <v-btn
                            :input-value="active"
                            icon
                            @click="toggle"
                            >
                            <v-icon>mdi-record</v-icon>
                          </v-btn>
                        </div>
                      </v-item>
                    </v-item-group>
                    <v-col>
                      <v-window
                        v-model="window"
                        class="elevation-1"
                        vertical
                        >
                        <v-window-item
                          v-for="(conteudo, i) in conteudo"
                          :key="i.episode_id"
                          >
                          <v-card flat>
                            <v-card-text>
                              <v-row class="mb-4" align="center">
                                <v-avatar color="grey" class="mr-4"></v-avatar>
                                <strong class="title">Titulo {{ conteudo.title }}</strong>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                  <v-icon>mdi-account</v-icon>
                                </v-btn>
                              </v-row>
                              <p>
                                Titulo {{ conteudo.opening_crawl }}
                              </p>
                            </v-card-text>
                          </v-card>
                        </v-window-item>
                      </v-window>
                    </v-col>
              </v-row>
              </v-card>
              <v-spacer></v-spacer>
            </v-col>
            <v-col
              sm="4"
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
                      <p>{{conteudo.release_date}}</p>
                    </template>
                    <div class="py-4">
                      <p>Titulo: {{conteudo.title}} - EP - {{conteudo.episode_id}}</p>
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
        length: 3,
        window: 0,
        
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








