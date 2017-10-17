<template>
	<v-container>
  		<pdf src="./static/JClayman_Resume.pdf"></pdf>
  	</v-container>	
</template>

<script>
import pdf from 'vue-pdf'

export default {
  data() {
    return {};
    },
  mounted() {
  },
  components: {
    pdf
  }
}
</script>