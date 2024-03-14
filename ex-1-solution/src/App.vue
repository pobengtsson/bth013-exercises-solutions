<template>
  <div id="app">
    <span>Hello World!</span>
    <input v-model="inputText" placeholder="Type something...">
    <span v-if="inputText" style="font-family: Arial; color: darkblue;">{{ inputText }}</span>
    <button @click="showAlert">Click Me</button>
    <p class="char-count">Character count: {{ inputText.length }}</p>
    <button @click="addItem">Add Item Button</button>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button class="toggle-button" @click="toggleDiv">Toggle Div</button>
    <div class="toggle-div" v-if="showDiv">Present in the DOM</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputText: '',
      items: [],
      showDiv: false,
    };
  },
  methods: {
    showAlert() {
      alert('Greetings earthling! We come in peace');
    },
    addItem() {
      this.items.push('An Item');
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
  },
};
</script>

<style>
span {
  font-family: Arial;
  color: darkblue;
}
</style>
