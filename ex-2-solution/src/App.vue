<template>
  <div id="app">
    <input type="text" v-model="inputText" @input="updateDisplayedText" placeholder="Enter text here" />
    <button @click="addToList">ADD</button>
    <button @click="toUpperCase">TO UPPERCASE</button>
    <div v-if="displayedText" data-test-id="echoInput">{{ displayedText }}</div>
    <div :class="{'font-demo': true}" :style="{ fontFamily: $bugsEnabled ? 'Arial' : 'Times New Roman' }">This text should be in Times New Roman</div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <input type="text" v-model="numberInput" placeholder="Enter number here" @input="calculateDigitSum" />
    <div  data-test-id="sum">Sum of digits: {{ sumOfDigits }}</div>
    <div class="mode">MODE: {{ $bugsEnabled ? "Has bugs" : "Bugs fixed"}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      displayedText: '',
      numberInput: '',
      sumOfDigits: 0,
      list: []
    };
  },
  methods: {
    updateDisplayedText() {
      this.displayedText = this.$bugsEnabled ? 'BUG? ' + this.inputText : this.inputText;
    },
    toUpperCase() {
      this.displayedText = this.$bugsEnabled ? this.inputText.replace(/(.)(.)/g, '$1 $2') : this.inputText.toUpperCase();
    },
    addToList() {
      if (this.$bugsEnabled && this.list.includes(this.inputText)) {
        // Bug: adds duplicates
        this.list.push(this.inputText);
      } else if (!this.list.includes(this.inputText)) {
        this.list.push(this.inputText);
      }
    },
    calculateDigitSum() {
      // Convert the input string to an array of digits, filter out digits
      const digits = this.numberInput.toString()
        .split('')
        .filter(char => !isNaN(Number(char))) // Keep only digit characters

      this.sumOfDigits = digits
        .reduce((sum, digit) => {
        return (this.$bugsEnabled ? sum * 10 * Number(digit) : sum + Number(digit));
      }, this.$bugsEnabled ? 1 : 0);
    },
  },
  watch: {
    inputText(newVal) {
      this.displayedText = this.$bugsEnabled ? 'BUG? ' + newVal : newVal;
    },
  }
}
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 24px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:nth-of-type(2) {
  background-color: #008CBA; /* Blue */
}

button:nth-of-type(2):hover {
  background-color: #007B8A;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Specific styles for the sum display */
.sum-display {
  margin-top: 20px;
  padding: 10px;
  background-color: #ffffcc; /* Light yellow */
  border-left: 5px solid #ffeb3b; /* Yellow */
}

/* Adjusting font for the font family demonstration */
.font-demo {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

.mode {
  position: absolute;
  bottom: 0;
  width: 100%; /* This ensures the div spans the full width of its parent */
  color: gray;
}

</style>
