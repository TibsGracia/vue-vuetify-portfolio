<template>
    <v-container>
    <!--<div class="light-green">
         <h3 class="my-3">Projects</h3>
    </div>-->
        <v-card 
        class="card--flex-toolbar"
        v-for="(project, value) of projects" 
        :project_data="value"
        @click=""
        >
            <v-card-media
                    height="250px">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline black--text">{{ project.title }}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-media>
            <v-card-text>
                {{ project.description | truncate 180 }}
            </v-card-text>
            <v-card-actions class="blue-grey darken-1">
                <v-btn :to="{ name: 'project_component', params: { projectId: project.id } }" flat class="white--text">This is a button</v-btn>
                <v-spacer></v-spacer>
                <v-icon class="white--text">explore</v-icon>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
  import projects from '../data/projects.json'
  import portfolioitem from '@/components/PortfolioItem'

  export default {
  	name: 'home',
  	props: ['project_id', 'project_data'],

    data() {
      return {
      	projects,
      	// imgSrc: require(`images/projects/${this.project_data.cover}`)
      };
    },
    filters: {

      truncate(value, limit) {
      	return _.truncate(value,{
          length: limit,
          omission: '...',
          separator: /,? +/
      	})
      }	
    }
	    
  };
</script>

<style>
	.card {
		margin-bottom: 60px;
	}
	.text-center {
  		text-align: center;
	}
</style>