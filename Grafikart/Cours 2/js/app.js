let vm = new Vue({
	el: '#app',
	data: {
		seconds: 0,
		persons: ['Jonathan', 'Marion', 'Marine', 'Jean', 'Patrick']
	},
	methods: {
		addPerson: function(){
			this.persons.push('Marion')
		}
	},
	mounted: function(){
		this.$interval = setInterval(() => {
			this.seconds++
		}, 1000)
	},
	destroyed: function(){
		clearInterval(this.$interval)
	}
})