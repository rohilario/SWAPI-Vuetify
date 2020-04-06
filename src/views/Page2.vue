<template>
    <md-card class="card-default">
        <h2>{{titulo}}</h2>
        <img class="imagem-quadrinho" :src="imagem"/>
        <p>{{descricao}}</p>
    </md-card>
</template>

<script>
export default {
    name: 'Page2',
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
</script>

<style scoped>

</style>