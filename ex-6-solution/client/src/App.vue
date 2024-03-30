<template>
  <div id="app">
    <input v-model="textInput" placeholder="Enter text to store" />
    <button @click="storeText">SEND</button>
    <button @click="retrieveText">GET Stored Text</button>
    <button @click="triggerError">Trigger Error</button>
    <input v-model="retrievedText" readonly placeholder="Retrieved text will appear here" />
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      textInput: '',
      retrievedText: '',
      errorMessage: '',
    };
  },
  methods: {
    async storeText() {
      try {
        await axios.post('/api/store', { text: this.textInput });
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.error : 'An unknown error occurred';
      }
    },
    async retrieveText() {
      try {
        const response = await axios.get('/api/retrieve');
        this.retrievedText = response.data.text;
        this.errorMessage = '';
      } catch (error) {
        this.handleErrorResponse(error);
      }
    },
    async triggerError() {
      try {
        await axios.get('/api/error');
      } catch (error) {
        this.handleErrorResponse(error);
      }
    },
    handleErrorResponse(error) {
      const status = error.response ? error.response.status : 500;
      switch (status) {
        case 404:
          this.errorMessage = 'No text found';
          break;
        case 500:
        case 503:
          this.errorMessage = error.response.data.error;
          break;
        default:
          this.errorMessage = 'An unknown error occurred';
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
