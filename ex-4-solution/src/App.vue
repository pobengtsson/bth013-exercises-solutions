
<template>
  <div id="app">
    <AddTodo />
    <TodoList />
    <p>Completed Todos: {{ completedTodosCount }}</p>
  </div>
</template>

<script>
import { useTodosStore } from './stores/todos';
import { computed } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    AddTodo,
    TodoList
  },
  setup() {
    const store = useTodosStore();
    const completedTodosCount = computed(() => store.completedTodosCount());

    return { completedTodosCount };
  }
}
</script>
