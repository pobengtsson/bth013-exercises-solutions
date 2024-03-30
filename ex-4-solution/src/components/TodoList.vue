
<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="completeTodo(todo.id)">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodosStore } from '../stores/todos';

export default {
  name: 'TodoList',
  setup() {
    const store = useTodosStore();
    const todos = store.todos;

    function completeTodo(todoId) {
      store.completeTodo(todoId);
    }

    return { todos, completeTodo };
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
