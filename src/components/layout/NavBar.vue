<template>
    <div>
        <v-card
            class="d-flex"
            
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