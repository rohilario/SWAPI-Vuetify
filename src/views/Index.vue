<template>
<div class="">
  <div class="wrapper">
                                    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
                                                  <!-- Main content -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <md-card class="card-default">
                <h2>{{titulo}}</h2>
                <img class="imagem-quadrinho" :src="imagem"/>
                <p>{{descricao}}</p>
              </md-card>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>



export default {
  components:{
    
},
  name: 'Index',
  data () {
    return {
      
      props: {
        imagem: {
            type: String
        },
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String
        }
    }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


