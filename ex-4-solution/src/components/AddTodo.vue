
<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodoText" placeholder="Add a new todo" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { useTodosStore } from '../stores/todos';
import { ref } from 'vue';

export default {
  name: 'AddTodo',
  setup() {
    const newTodoText = ref('');
    const store = useTodosStore();

    function addTodo() {
      store.addTodo(newTodoText.value);
      newTodoText.value = '';
    }

    return { newTodoText, addTodo };
  }
}
</script>
