# Exercise 6 - Using and implementing remote API

## Purpose

The purpose of this exercise is for you to learn, practice and explore different ways of getting and passing information to and from Remote APIs as well as how to implement remote API endpoints.

## Overview of the Exercise

The base project provided includes a simple Vue.js client and an Express.js server setup.
Your task is to modify this base and add features and error handling mechanisms incrementally as instructed in the below steps.

#### Step 1: Exploring HTTP GET and POST

- **1.1 Server Side (Express.js):**
  - Implement an endpoint to store text data sent via a POST request.
    - Path: `/api/store`
    - Expected request body: `{ text: String }`
  - Implement an endpoint to retrieve stored text data via a GET request.
    - Path: `/api/retrieve`

- **1.2 Client Side (Vue.js):**
  - Create an input form with a text field and a SEDN-button. When button is clicked submit the content of the text field to the `/api/store` (POST) endpoint.
  - Create a GET-button that requests the stored text using the `/api/retrieve` endpoint from previous step and show retrieved text data in a readonly text field.

#### Step 2: Implementing Error Handling

- **2.1 Server Side:**
  - Modify the `/api/store` endpoint to return a 400 error if the posted text is empty or missing.
    - error message: Include a error message text explaining the error.
  - Add a new endpoint that always returns a 500 error for testing.
    - Path: `/api/error`

- **2.2 Client Side:**
  - Implement error handling for the POST request.
    - Display any error messages returned from the server.
    - Show all error messages in the app UI (hint: text field and v-if) and style to make its meaning clear.
  - Add a button to intentionally trigger a request to the `/api/error` endpoint.
    - Display the error code and error message returned from the server.

### Step 3: Cookies

- **3.1 Server Side:**
  - modify the server endpoint `/apit/store` to set a cookie in the response.
    Make the cooke name `bth013` and set the cookie value to some variant of the stored string, e.g append the string "COOKIE" to it.
  - Explore the options part of the cookie and explore different settings, e.g. Domain, Path, httpOnly, maxAge, SameSite

- **3.2 Client Side:**
  - Make sure your browser allows cookies for you site. Inspect using the debugger that the cookie is received and has the expected name and values
  - Add a read only text field in the ui that shows the value of the cookie. When you see that your client code can show the cookie value, experiment by setting different cookie options when sending the cookie from the server. What effect does different settings have?

#### Step 4: Handling HTTP Response Codes

- **4.1 Server Side:**
  - Modify the `/api/retrieve` endpoint to return a 404 error if no text data is found.
  - Ensure that successful requests return appropriate 2xx status codes.

- **4.2 Client Side:**
  - Implement handling for response codes 2xx, 4xx and 5xx from the server.
    - Display appropriate messages.

#### Step 5: Advanced Error Handling and Redirects

- **5.1 Server Side:**
  - Introduce a condition, for example if a specific text (e.g. "FAILURE") is posted to simulate a server-side error (e.g., simulate a database failure) and return a 503 Service Unavailable status.
  - Implement a redirect from an old endpoint `/api/old-retrieve` to the new `/api/retrieve` using a 301 Moved Permanently status.

- **5.2 Client Side:**
  - Add error handling for the new simulated server-side error scenario.
  - Test the redirect by making a request to `/api/old-retrieve` and ensure the client correctly follows the redirect to the new endpoint.

Now you have inmplemented API endpoints in a server and used remote APIs in the web application.
Imagine the possibilities you have to create awesome user experiences!

Have Fun!
