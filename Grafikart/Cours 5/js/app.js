let capitalize = function(value, prefix, suffix){
	return prefix + value.toUpperCase() + suffix
}

Vue.filter('reverse', function(value){
	return value.split('').reverse().join('')
})

new Vue({
	el: '#app',
	filters: {
		capitalize
	},
	data: {
		message: 'Mon message'
	}
})