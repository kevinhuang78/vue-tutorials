<template>
  <div>
    <todos v-model="todos"></todos>
  </div>
</template>

<script>
import Todos from './components/Todos'
export default {
  data() {
    return {
      /*todos: [{
        name: 'Demo',
        completed: true
      }]*/
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: 'Jean',
        completed: false
      })
    }
  },
  components: {
    Todos
  },
  name: 'App'
}
</script>

