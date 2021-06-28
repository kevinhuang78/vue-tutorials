<template>
	<section class="todoapp">
		<header class="header">
			<h1>To-do list</h1>
			<input type="text" class="new-todo" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo" />
			<div class="main">
				<input type="checkbox" class="toggle-all" v-model="allDone" />
				<ul class="todo-list">
					<li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed" />
							<label @dblclick="editTodo(todo)">{{ todo.name }}</label>
							<button class="destroy" @click.prevent="deleteTodo(todo)"></button>
						</div>
						<input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" v-focus="todo === editing" @blur="doneEdit" @keyup.esc="cancelEdit" />
					</li>
				</ul>
			</div>
		</header>
		<footer class="footer" v-show="hasTodos"> <!-- Ou v-show="todos.length > 0" -->
			<span class="todo-count"><strong>{{ remaining }}</strong> tâche{{ plurals }} à faire</span>
			<ul class="filters">
				<li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
				<li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">À faire</a></li>
				<li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
			</ul>
			<button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
		</footer>
	</section>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default {
		props: {
			value: {type: Array, default() { return [] }}
		},
		data() {
			return {
				/*todos: [{
					name: 'Première tâche de test',
					completed: false
				}],*/
				todos: this.value,
				newTodo: '',
				filter: 'all',
				editing: null,
				oldTodo: ''
			}
		},
		watch: {
			value(value) {
				this.todos = value
			}
		},
		methods: {
			addTodo() {
				this.todos.push({
					completed: false,
					name: this.newTodo
				})
				this.newTodo = ''
			},
			deleteTodo(todo) {
				this.todos = this.todos.filter(i => i !== todo)
				this.$emit('input', this.todos)
			},
			deleteCompleted() {
				this.todos = this.todos.filter(todo => !todo.completed)
				this.$emit('input', this.todos)
			},
			editTodo(todo) {
				this.editing = todo
				this.oldTodo = todo.name
			},
			doneEdit() {
				this.editing = null
			},
			cancelEdit() {
				this.editing.name = this.oldTodo
				this.doneEdit()
			}
		},
		computed: {
			remaining() {
				return this.todos.filter(todo => !todo.completed).length
			},
			plurals() {
				if(this.todos.filter(todo => !todo.completed).length > 1) {
					return 's'
				} 
			},
			filteredTodos() {
				if(this.filter == 'todo') {
					return this.todos.filter(todo => !todo.completed)
				}
				else if (this.filter === 'done') {
					return this.todos.filter(todo => todo.completed)
				}
				return this.todos
			},
			completed() {
				return this.todos.length
			},
			hasTodos() {
				return this.todos.length > 0
			},
			allDone: {
				get() {
					// Comment est définie la propriété
					return this.remaining === 0
				},
				set(value) {
					// Quand tu modifies
					this.todos.forEach(todo => {
						todo.completed = value
					})
				}
			}
		},
		directives: {
			focus(el, value) {
				if(value) {
					Vue.nextTick(_ => {
						el.focus()
					})
				}
			}
		}
	}
</script>

<style type="text/css" src="./todos.css"></style>