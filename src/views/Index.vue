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
                <line-chart
                  v-if="loaded"
                  :chartdata="chartdata"
                  :options="options"
                  />
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
import { Bar } from 'vue-chartjs'



export default {
  extends: Bar,
  components:{
  
},
  name: 'index',
  data () {
    return {
      chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
      
    }
    
  },
  mounted(){
    this.renderChart(this.chartdata, this.options)
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>






