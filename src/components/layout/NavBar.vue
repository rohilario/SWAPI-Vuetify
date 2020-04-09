<template>
    <div>
        <v-card
class="d-flex justify-center align-center mb-6"
            color="grey lighten-2"
            flat
            tile
            >
            <v-card
                class="pa-2"
                outlined
                tile
                >
                Flex item
            </v-card>
                <v-card
                class="pa-2"
                outlined
                tile
                >
                Flex item
            </v-card>
                        <v-card
                class="pa-2"
                outlined
                tile
                >
                Flex item
            </v-card>
        </v-card>
    </div>
</template>

<script>


  export default {
    data: () => ({
    drawer: null,
    name: 'NavBar',
    })
  }

</script>