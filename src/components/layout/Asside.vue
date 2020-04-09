<template>

    <v-card>
        <v-navigation-drawer
      expand-on-hover
      app
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
         >        
        <v-list-item class="px-2">
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>SWAPI</v-list-item-title>
        </v-list-item>

            <v-divider></v-divider>
        <v-list shaped>
            <v-subheader>MENU</v-subheader>
                <v-list-item-group v-model="item" color="black">
                    <v-list-item
                        v-for="item in items"
                        :key="item.id"
                        link
                        :to="item.link"
                        
                        >
                        <v-list-item-icon>
                            <v-icon>      {{item.icon}}      </v-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content color="white">
                            <v-list-item-title >{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                        <v-divider></v-divider>
                        <v-divider></v-divider>
                        <v-divider></v-divider>
                </v-list-item-group>
        </v-list>
        <template >
        <div class="pa-2">
          <v-btn class="px-2">Logout</v-btn>
        </div>
      </template>
</v-navigation-drawer>
</v-card>
</template>

<script>

  export default {
      
      name:'Asside',
    data: () => ({
        
        
        
            items: [
            { title: 'Pessoas', icon: 'mdi-account-box', link:'/pessoas' },
            { title: 'Planetas', icon: 'mdi-compass',link:'/planetas' },
            { title: 'Filmes', icon: 'mdi-filmstrip' ,link:'/filmes'},
            { title: 'Especies', icon: 'mdi-linux',link:'/especies' },
            { title: 'Veiculos', icon: 'mdi-forklift',link:'veiculos' },
            { title: 'Naves Espaciais', icon: 'mdi-rocket',link:'/naves_espaciais' },
            
            ],
        
      
    })
  
}
</script>
