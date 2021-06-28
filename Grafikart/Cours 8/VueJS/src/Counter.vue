<template>
	<div class="counter">
		{{ count }}
		<div class="counter_button" @click="increment">
			+
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from './store/NotificationsStore'
	export default {
		data() {
			return {
				state: store.state
			}
		},
		computed: {
			count: function() { return this.state.count }
		},
		methods: {
			increment() {
				store.increment()
			}
		}
	}
</script>
<style type="text/css" src="./counter.css"></style>