<template>
  <v-container fluid fill-height>
     <v-layout
       justify-center
       align-center
       >
 	</v-layout>
  </v-container>      
</template>

<script>
import projects from '../data/projects.json'

export default {
  data() {
    return {
      projectData: projects[this.$route.params.projectId]
    }
  },
  filters: {
    shrinkUrl(value) {
      return value.replace(/^https?\:\/\//i, '')
    }
  },
 /* methods: {
    imgDetailSrc(value) {
      return require(`images/projects/${value}`)
    }
  }*/
}
</script>

<style>

</style>