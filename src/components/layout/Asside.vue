<template>
<v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
        >
    <v-card>
        
        <v-list-item class="px-2">
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>SWAPI</v-list-item-title>

            <v-btn
            icon
            @click.stop="mini = !mini"
                >
            <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

            <v-divider></v-divider>
        <v-list shaped dense>
            <v-subheader>MENU PRINCIPAL</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                        v-for="item in items"
                        :key="item.id"
                        link
                        :to="item.link"
                        >
                        <v-list-item-icon>
                            <v-icon>      {{item.icon}}      </v-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                        <v-divider></v-divider>
                        <v-divider></v-divider>
                        <v-divider></v-divider>
                </v-list-item-group>
        </v-list>
        <v-list dense>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="item" color="primary">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                     </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</v-navigation-drawer>
</template>

<script>

  export default {
      
      name:'Asside',
    data: () => ({
        
        
        drawer: true,
            items: [
            { title: 'Pessoas', icon: 'mdi-account-box', link:'/pessoas' },
            { title: 'Planetas', icon: 'mdi-compass',link:'/planetas' },
            { title: 'Filmes', icon: 'mdi-filmstrip' ,link:'/filmes'},
            { title: 'Especies', icon: 'mdi-linux',link:'/especies' },
            { title: 'Veiculos', icon: 'mdi-forklift',link:'veiculos' },
            { title: 'Naves Espaciais', icon: 'mdi-rocket',link:'/naves_espaciais' },
            
            ],
        mini: false,
      
    })
  
}
</script>
