<template>
	<div>
		<transition name="bounce">
			<div class="ui message success" v-if="visible">
				{{ message }}
			</div>
		</transition>
		<button @click="toggle">Toggle</button>
	</div>
</template>

<script type="text/javascript">

	export default {
		data() {
			return {
				visible: true,
				message: 'Mon message'
			}
		},
		methods: {
			toggle: function() {
				this.visible = !this.visible
			}
		}
	}
</script>

<style type="text/css">
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s, transform 1s;
	}
	.fade-enter, .fade-leave-active {
		opacity: 0;
		transform: translateX(20px);
	}
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
</style>