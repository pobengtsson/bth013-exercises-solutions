# Exericse 1

The purpose of this exercise is to get started with a small and simple Vue.js 3 web application

## Incremental

The idea is that you do this exercise in steps of increasing difficulty and complexity.

This exercise comes with premade cypress test case file. Run it repeatedly to get automatic feedback on when you have completed each step. When all tests pass, you have completed the exercise. Well done!

## Instructions

## Setup:
* Clone the exercises repo (you should only need to do this once to get all the exercises for the course.)
```bash
$ cd ~/proj
$ git clone git@github.com:pobengtsson/bth013-exercises.git
```
* Set your working directory to the first exercise folder:
```bash
$ cd bth013-exercises/ex-1
```
* Create a new project by running the following command and making the relevant choices. This is the first part of the exercise where you need to understand what choices to make when initiating a new Vue.js project.
```bash
$ npm init vue@3
$ npm install
```
* So now you have a initial project. Now, copy the file `exercise1.cy.js` to the `cypress/e2e` folder.

* Build the initially generated code.
```bash
$ npm run build
```

* Run the test cases using the command below. You should a set of failing tests. Did you? Great, well done, you are ready to continue to the first programming step, Step 1:
```bash
$ npm run test:e2e
```

* Next, implement each step and continue to next step when the test case passes.
- preview your app by running: `npm run preview` and open the app in your browser.
- Remember to rebuild as soon as you have made changes to your app that you want to test by running the command: `npm run test:e2e`

## Coding steps
Here's a initial instruction for each step. It will likely be necessary for you to read the cypress test code for each step to completely understand what you need to code for each step to pass the tests.

### Step 1: Hello world!
Add a <span> element that displays the text: "Hello World!"

### Step 2: input field
Add an input that outputs anything that is typed into it to another <span> element on the page.

### Step 3: Styling
Add styling so that all <span> elements use the Arial font-family.

### Step 4: Alert - Click of a Button
Add a button that, when clicked, shows an alert that says 'Greetings earthling! We come in peace'.

### Step 5: React to input
Add code so that when user types into the input field, an element shows the number of characters that is currently visible in the input.

### Step 6: Render a list
Add another button that when clicked adds the text "An Item" to a list that is displayed as an unnumbered list <ul>.

### Step 7: Now you see me, now you don't
Add a button and an <div> element that display a text "Present in the DOM", and implment a handler so that when the button is clicked it toggles between making the <div> element part of the DOM and removing it. Hint v-if.
