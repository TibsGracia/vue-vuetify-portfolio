<template>
        <v-card>
            <v-card-media
                    height="250px">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline black--text">{{ project_data.title }}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-media>
            <v-card-text>
                {{ project_data.description }}
            </v-card-text>
            <v-card-actions class="blue-grey darken-1">
                <v-btn :to="{ name: 'project_component', params: { projectId: project_id } }" flat class="white--text">This is a button</v-btn>
                <v-spacer></v-spacer>
                <v-icon class="white--text">explore</v-icon>
            </v-card-actions>
        </v-card>
</template>

<script>

export default {

  props: ['project_id', 'project_data'],

  data() {
    return {
    }
  },
  filters: {
    truncate(value, limit) {
      return _.truncate(value, {
        length: limit,
        omission: '...',
        separator: /,? +/
      })
    }
   }  
}
</script>

<style>

</style>