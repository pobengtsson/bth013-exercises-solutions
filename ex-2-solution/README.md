# exercise 2 - Cypress tests Exercise

## Purpose

This exercise is designed to help you get started with writing web UI test cases using Cypress. You will work on a given web application that has a number of (intentional) bugs. Your task is to write test cases that expose these bugs. The correct functions are simple to understand and the planted bugs are easy to tell apart from the correct function. The purpose is to learn how to write test cases, run the test cases, understand the test case results and to be able to tell if the error message is an error in the test case or an error in the target code, or both.

## Assignment

Read through this assignment to the end before starting.

In this exercise you get a Vue.js 3 application that has a number of functions. Each functionality also has a hidden bug. Your goal is to implement test cases for each correct functionality such that the existing bugs are exposed. The functions are simple and the bugs are easy to spot.

This means that you need to figure out how to describe these functions as test cases and make sure that if the bug is removed the test passes.

The suggested way to work with this is:

1) Read the specification of the first function and create a cypress test case
2) Run the test case against the provdided app code.
   The result should be test case that runs as expected without crashing, and but does not pass.
3) Now, carefully, study the test result, the source code of the app and try to figure out if your test case found a bug, or if your test case failed because it had misunderstood how the function should work or it was based on assumptions that turned out to be wrong.
4) If your test case exposed the bug,
   then update the web app code to fix the bug and re-run the tests. It should now pass.
4) If your test case crashed or didn't find the bug, then update your test code and repeat from step 2.
5) Move to the next function. It is strongly recommended to work one function spec at a time.

## Function Specification

1. **Input Field Display**: There's an input field at the top of the page. When the user types in the input field it is shown exactly the same in another element on the page. Write a test case to ensure the text is displayed correctly after input.

2. **TO UPPERCASE Button**: This button is expected to change the displayed text from the input field by modifying its case. Write a test case to verify that the text is transformed correctly upon clicking this button.

3. **Font Style of Text Element**: The text "This text should be in Times New Roman" is intended to be displayed in the "Times New Roman" font. Write a test case to check if the font style of the text element is as expected.

4. **Addition to List**: There's an "ADD"-button that adds the value entered in the input field to a list and displayed on the page when pressed but it does not add the text if is already in the list. Write a test case to verify that each input value is added and displayed correctly in the list without any duplicates.

5. **Sum of Numbers**: There is an input field at the end of the page, when entering numbers, the application shows the sum of all entered digits. Write a test case to ensure that the sum calculation and display functionality works as intended.

## Notes

- Do not assume the existence of bugs; your test cases should validate that the application works as described.
- Pay attention to detail and consider edge cases in your test scenarios.
- Use Cypress best practices for writing your test cases.

Good luck!


## How to run and build the app


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
