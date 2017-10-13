<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="../assets/gilbert.png" alt="Gilbert">
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Jacob Clayman
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>assignment_turned_in</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal lighten-3" light fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Projects</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center
          >
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import PortfolioItem from './PortfolioItem.vue'

  export default {
    name: 'Home',
    components: {
      PortfolioItem
    },
    data: () => ({
      drawer: true
    }),
    data () {
      return {
        menuItems: [
          {
            icon: 'assignment_turned_in',
            title: 'Projects',
            menuItems: [
              {title: 'Tumbleweed Express'},
              {title: 'Trials By Torchlight'},
              {title: 'GNOP'},
              {title: 'Climby'},
              {title: 'Snake Escape'},
              {title: 'Moonshadow'},
              {title: 'Alkir\'s Crypt'},
              {title: 'RoboHeart'},
              {title: 'Paintsketball!'},
              {title: 'Monkey Business'},
              {title: 'Gilbert\'s Great Escape'}
            ]
          }
        ]
      }
    },
    props: {
      source: String
    }
  }
</script>

<style>
	
</style>