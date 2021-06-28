// Component monMessage = Balise mon-message
let monMessage = {
	props: {
		type: {type: [String, Number], default: 'success'}, // Accepter plusieurs types et valeurs par défaut
		message: String,
		header: String
	},
	template: `<div class="ui message" :class="type">
	<i class="close icon" @click.prevent="close">Close</i>
	<div class="header">{{ header }}</div>
	{{ message }}
	</div>`,
	methods: {
		close() {
			this.$emit('close')
		}
	}
}

let counter = {
	data: function() {
		return {
			count: 0
		}
	},
	props: {
		start: {type: Number, default: 0}
	},
	computed: {
		total: function() {
			return this.start + this.count
		}
	},
	methods: {
		increment: function() {
			this.count++
		}
	},
	template: `<div>
	<button @click="increment">{{ total }}</button>
	</div>`
}

let formUser = {
	props: {
		value: Object
	},
	data: function() {
		return{
			//userLocal: { ...this.user }
			user: JSON.parse(JSON.stringify(this.value))
		}
	},
	methods: {
		save() {
			this.$emit('input', this.user)
		}
	},
	template: `
		<form class="ui form" @submit.prevent="save">
			<p><slot name="header"></slot></p>
			<div class="field">
				<label for="">Prénom</label>
				<input type="text" v-model="user.firstname" />
			</div>
			<div class="field">
				<label for="">Nom</label>
				<input type="text" v-model="user.lastname" />
			</div>
			<button class="ui button" type="submit">Envoyer</button>
			<p><slot name="footer"></slot></p>
		</form>
	`, // Slot executé au moment où il est écrit
	mounted: function(){
		console.log(this)
	}
}

let vm = new Vue({
	el: '#app',
	components: { monMessage, counter, formUser },
	data: {
		message: 'Mon message',
		alert: false,
		user: {
			firstname: 'Jean',
			lastname: 'DeLaTour'
		}
	},
	methods: {
		showAlert() {
			this.alert = true
		},
		hideAlert() {
			this.alert = false
		}
	}
})