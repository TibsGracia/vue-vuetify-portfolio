<template>
    <v-container>
        <project-list-item v-for="(value, index) of projects" :project_id="index" :project_data="value" :key="index.id"></project-list-item>
    </v-container>
</template>

<script>
  import projects from '../data/projects.json'
  import projectListItem from '@/components/ProjectListItem'

  export default {
    components: {
      'project-list-item': projectListItem
    },
    data() {
      return {
      	projects,
      	// imgSrc: require(`images/projects/${this.project_data.cover}`)
      };
    },
    /* methods: {
      fetchProjects: function () {
        axios.get('http://localhost:8080/data/projects.json').then((response) => {
          this.projects = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.fetchProjects()
    } */
  }    
   /* filters: {

      truncate(value, limit) {
      	return _.truncate(value,{
          length: limit,
          omission: '...',
          separator: /,? +/
      	})
      }	
    } */
	    
</script>

<style>
	.card {
		margin-bottom: 60px;
	}
	.text-center {
  		text-align: center;
	}
</style>