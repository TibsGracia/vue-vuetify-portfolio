<template>
	<section>	
		<div class="container">		
  			<pdf src="./static/JClayman_Resume.pdf"></pdf>
 		</div>
 	</section>	 
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}
</script>