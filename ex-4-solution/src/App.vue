
<template>
  <div id="app">
    <AddTodo />
    <TodoList />
    <p>Completed Todos: {{ completedTodosCount }}</p>
  </div>
</template>

<script setup>
import { useTodosStore } from './stores/todos';
import { computed } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

const store = useTodosStore();
const completedTodosCount = computed(() => store.completedTodosCount());

</script>
