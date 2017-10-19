<template>
  <v-app id="app">
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
            <img src="./assets/gilbert.png" alt="Gilbert">
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Jacob Clayman
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
      <v-list class="pt-0">
        <v-list-group v-for="item in items" :value="item.active" :key="item.title">
          <v-list-tile slot="item" :href="item.href" :to="{name: item.href}" exact>
            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <!-- <v-list-tile-action v-show="item.items.length > 0">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile> -->
          <!-- <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="" :href="subItem.href" :to="{name: subItem.href}">
		        <v-list-tile-content>
		          <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
		        </v-list-tile-content> -->
		      </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="light-green darken-1" light fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn> 
      <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    </v-toolbar>
    <main>
	    <v-fade-transition mode="out-in">
	      <router-view></router-view>
	    </v-fade-transition>
    </main>
    <v-footer class="green" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
  	name: 'app',
    data () {
      return {
        drawer: true,
        items: [{
        	href: 'Projects',
        	router: true,
        	title: 'Projects',
        	icon: 'work',
        	active: true,
        }, {
        	href: 'Resume',
        	router: true,
        	title: 'Resume',
        	icon: 'assignment',
        	items: [],
        }, {
        	href: 'Contact',
        	router: true,
        	title: 'Contact',
        	icon: 'contact_mail',
        	items: [],
        }],
    };
  }
}

</script>

<style>
	
</style>
