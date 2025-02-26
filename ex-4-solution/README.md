# Exercise 4: Building a Todo List Manager in Vue.js 3

## Purpose
The purpose of this exercise is for you to learn, practice and explore data and state management in Vue.js and using Pinia.

## Setup
1. **Project Initialization**: Initialize a new Vue.js project using `npm init vue@3`. Ensure Vue 3 is selected during setup.

## Step 1: Local State and Basic Component Architecture
- **Task 1.1**:
  - Create a `TodoList` component.
  - Inside it, define a `todoList` array in the component's local state using Composition API.
  - Populate it with a few sample todo objects (each with `id`, `text`, and `completed` properties).
- **Task 1.2**:
  - Render the `todoList` list in the template using `v-for`.
  - Display the `text` of each todo.
- **Task 1.3**:
  - Create an `AddTodo` component with a form for adding a new todo (a text input and a submit button).
  - Use `v-model` to bind the input to a local state property.

## Step 2: Global State and Component Communication
- **Task 2.1**:
  - Move the `todoList` array to the App component's state.
  - Pass it down to `TodoList` and `AddTodo` components as props.
- **Task 2.2**:
  - Implement an `addTodo` method in the `App` component that adds a new todo to the `todoList` array. Pass this method to the `AddTodo` component using props and call it upon form submission.
- **Task 2.3**:
  - Add a `completeTodo` method in the `App` component. Pass it to the `TodoList` component, where it can be used to toggle the `completed` status of todos.

## Step 3: State Management with `reactive()` and Event Emission
- **Task 3.1**: Refactor the `App` component's state to use the `reactive()` function for defining the `todoList` array. This enhances reactivity and state management capabilities.
- **Task 3.2**: Modify the `AddTodo` and `TodoList` components to emit events (`$emit`) to the App component for adding and completing todos, instead of directly invoking methods passed via props.

## Step 4: Persisting State
- **Task 4.1**:
  - Implement state persistence for the `todoList` array using `localStorage`.
  - Ensure that todos are saved to `localStorage` on every addition or completion and are loaded from `localStorage` when the app initializes.

- **Task 4.2**: (Advanced/Optional)
  - Explore using IndexedDB for state persistence. Implement a basic IndexedDB storage solution for todos.

## Step 5: Introduction to Pinia for State Management
- **Task 5.1**:
  - Install and set up Pinia.
  - Create a `todoList` store with state, getters, and actions to manage todo operations (add, complete, load).
- **Task 5.2**:
  - Refactor the `App`, `TodoList`, and `AddTodo` components to use the `todoList` store instead of the `App` component's local state.
  - Utilize store actions and getters.
- **Task 5.3**:
  - Implement a getter in the `todoList` store that counts the number of completed todos. Use this getter in a component to display the count.

## Step 6: Devtools and Debugging
- **Task 6.1**:
  - Explore Vue Devtools to inspect and debug the application's state, especially focusing on the reactivity and changes within the Pinia store.
- **Task 6.2**:
  - Use Vue Devtools to track events emitted between components, ensuring that your event-based communication is functioning as expected.

## Objective
By the end of this exercise, you will have built a functional Todo List Manager application in Vue.js 3, covering local and global state management, component architecture, state persistence, and advanced state management with Pinia.

Remember, the key goal is to explore and practice vue application state development skills. Experiment!

Have Fun!
