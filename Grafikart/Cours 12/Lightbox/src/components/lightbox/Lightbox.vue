<style src="./lightbox.scss" lang="scss"></style>

<template>
	<div class="lightbox" v-if="image">
		<img :src="image" />
	</div>
</template>

<script type="text/javascript">
	import './LightboxDirective'
	import store from './LightboxStore'
	export default {
		data() {
			return {
				state: store.state
			}
		},
		computed: {
			image() { 
				if(this.state.index != false) {
				return this.state.images(this.state.index)
				} 
			}
		}
	}
</script>