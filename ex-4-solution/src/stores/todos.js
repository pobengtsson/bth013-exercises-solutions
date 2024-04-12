
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodosStore = defineStore('todos', () => {
    const todos = ref(JSON.parse(localStorage.getItem('todos')) || []);

    function addTodo(newTodoText) {
        const newId = todos.value.length > 0 ? Math.max(...todos.value.map(t => t.id)) + 1 : 1;
        todos.value.push({ id: newId, text: newTodoText, completed: false });
        localStorage.setItem('todos', JSON.stringify(todos.value));
    }

    function completeTodo(todoId) {
        const todo = todos.value.find(t => t.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(todos.value));
        }
    }

    const completedTodosCount = () => todos.value.filter(todo => todo.completed).length;

    return { todos, addTodo, completeTodo, completedTodosCount };
});
