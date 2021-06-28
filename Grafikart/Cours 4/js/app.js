// Vue.directive('salut', {
// 	bind: function(el, binding, vnode){
// 		el.value = binding.value
// 		console.log('bind')
// 	},
// 	update: function(el, binding, vnode, oldvnode){
// 		console.log('update')
// 	}
// })

// Si on veut object qu'avec update, utiliser directive avec fonction directement
// Vue.directive('salut', function(el, binding){
// 	el.value = binding.value
// 	console.log('update')
// })

// Utiliser directive dans la Vue
let salut = function(el, binding){
	el.value = binding.value
	console.log('update')
}

let vm = new Vue({
	el: '#app',
	directives: {
		//salut: salut
		// En ES6
		salut
	},
	data: {
		message: 'Mon message'
	},
	methods: {
		demo: function(){
			console.log('Demo')
		},
		demo2: function(){
			console.log('Demo2')
		},
		demo3: function(){
			console.log('Demo3')
		},
		onkeyupinput: function(){
			console.log('Input keyup')
		}
	}
})