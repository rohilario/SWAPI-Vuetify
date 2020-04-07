<template>
  <div>
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col
              sm="4"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                One of three columns
              </v-card>        
            </v-col>
            <v-col
              sm="4"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                One of three columns
              </v-card>        
            </v-col>
            <v-col
              sm="4"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                One of three columns
              </v-card>        
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
export default {
  components:{
    
    
},
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>






