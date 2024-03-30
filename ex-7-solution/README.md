# Exercise 6 Reusing Vue.sj components - Vuetify

## Purpose

Now that you know how to build Vue.js components and communicating with and implementing APIs you might have realized that some web application UI is repeating in and between applications and that a great deal of value would come from having ready made UI-components to reuse. And you are right, there are multiple component frameworks and libraries for Vue.js and for other UI frameworks.
The purpose of this exercise is for you to practice, learn and explore using a popular and widely used component library, Vuetify.

**Objective:** Based on the provided data store, build an event management application using Vue.js 3 and Vuetify, focusing on creating a responsive and feature-rich user interface and reusing components whenever possible.

**Prerequisites:**
- The project files and config
- Run `npm install` to install dependencies.
- Look up Vuetify's official online documentation for detailed information on the components and their properties.


### Exercise Steps

#### Step 1: Setup and Explore the Base Project
- **Task:** Familiarize yourself with the project structure and run the project to explore and understad the functions.
- **Concepts:** Project structure, application functions

#### Step 2: Install Vuetify
- **Task:** Install Vuetify and make the necessary changes and additions to configuration files, including `package.json`.
- **Concepts:** Vuetify project integration. Configuration dependencies and relationship between Vue.js and Vuetify.js.

#### Step 3: Create a Basic Layout Using Vuetify
- **Task:** Modify the `App.vue` to include a `v-app-bar`, `v-main`, and `v-footer`. Use material icons in the app bar for navigation. Editing the events should be its own views. Adding events should be done from a floating action button (FAB).
- **Concepts:** Layouts, material design, material icons.

#### Step 3: Implement Event Listing
- **Task:** Create a new Vue component `EventList.vue`. Use `v-list` and `v-list-item` components to display events. Each event item should show the event title, date, and a short description.
- **Concepts:** Vuetify list components, props.

#### Step 4: Implement Calendar View
- **Task:** Create another Vue component `EventCalendar.vue`. Use the `v-calendar` component to display events on a calendar view. Events should be marked on the calendar, and clicking a date should list the events for that day below the calendar.
- **Concepts:** Vuetify calendar view, event handling.

#### Step 5: Configure the Navigation
- **Task:** Implement a navigation drawer (`v-navigation-drawer`) in `App.vue` to switch between the Event List and Calendar View.
- **Concepts:** Navigation, Vuetify components.

#### Step 6: Customize a Vuetify Component
- **Task:** Customize the `v-list-item` component in `EventList.vue` to change its appearance when an event is selected.
- **Concepts:** Customizing Vuetify components, CSS.

#### Step 7: Design a Theme
- **Task:** Use the Vuetify online theme tool to design a custom theme for your app. Apply this theme to your project.
- **Concepts:** Theming, Vuetify configuration.

#### Step 8: Make It Responsive
- **Task:** Ensure your application layout is responsive. Test by resizing your browser window and viewing the app on different device emulators. Use the browser in development mode to simulate different device screens.
- **Concepts:** Responsive layout, Vuetify breakpoints.




Remember the purpose of this exercise is exploration and practice, not perfection.
Play and experiment with different Vuetify components and properties.

Have Fun!
