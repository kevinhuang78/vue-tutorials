new Vue({
	el: '#app',
	data: {
		message: 'Salut les gens',
		link: 'https://www.kevinhuang.fr',
		success: true,
		persons: ['Jonathan', 'Marion', 'Marine', 'Jean', 'Patrick']
	},
	methods: {
		close: function(){
			this.success = false // this pour avoir toutes les données de 'data', mettre success à false au moment du clic avec la méthode close
		}
	}
})