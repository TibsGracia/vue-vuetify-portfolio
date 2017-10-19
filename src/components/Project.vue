<template>
  <v-btn fab light class="light-green" :to="{name: 'Projects'}">
	<v-icon>arrow_back</v-icon>
  </v-btn>
</template>

<script>
  import projects from '../data/projects.json'

  export default {
  	data() {
  		return {
  			projectData: projects[this.$route.params.projectId]
  		}
  	},

  }	
</script>

<style>
	
</style>