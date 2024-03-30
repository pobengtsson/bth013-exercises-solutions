#  Exercise 5: Vue.js 3 Routing & Navigation Exercise: Exploring a House

## Purpose

This exercise is designed to help you explore and practice handling navigation in a Vue.js 3 application, specifically focusing on Vue Router and related concepts.

## Objective

The goal is to build a web application themed around navigating through different rooms in a house, each with its own layout and content, without the need for page reloads and enabling smooth browser back/forward navigation.

#### Part 1: Project and Vue Router Setup
1. **Create a New Vue.js Project:**
   - Use Vue CLI to create a new project. Enable Vue Router when prompted, choosing the history mode.
2. **Setup Vue Router:**
   - In the `src/router/index.js` file, ensure Vue Router is imported and a router instance is created.
   - Use `createWebHistory` to enable history mode for clean URLs.

#### Part 2: Defining Routes
1. **Define Basic Routes:**
   - Create components for different rooms (e.g., `LivingRoom.vue`, `Kitchen.vue`, `Bedroom.vue`, and `Bathroom.vue`) inside the `src/components` directory.
   - Define routes for each room in the `src/router/index.js` file, setting up a path and component for each. Use the room names as paths (e.g., `/living-room`).
2. **Named Routes and Props:**
   - Assign a name to each route.
   - Modify one of the room components to accept a prop and show it in the ui, and pass a static prop through its route definition.

#### Part 3: Router-View and Navigation
1. **Setup Default Layout and Navigation:**
   - Inside `App.vue`, set up a `<router-view>` component where the different room components (`LivingRoom.vue`, `Kitchen.vue`, etc.) will be rendered based on the route.
   - Directly below the `<router-view>`, add a `<nav>` element to create a navigation bar. Inside this `<nav>`, include `<router-link>` components for navigating to each room. You'll mix static paths and dynamic route name bindings as follows:
     - For the Living Room and Kitchen, use the `to` attribute with static paths:
       - `<router-link to="/living-room">Living Room</router-link>`
       - `<router-link to="/kitchen">Kitchen</router-link>`
     - For the Bedroom and Bathroom, bind to route names using the `:to` attribute. This requires that you've named your routes in `src/router/index.js`:
       - Assume you've named your routes like so: `{ name: 'bedroom', path: '/bedroom', component: Bedroom }`
       - Then bind like this: `<router-link :to="{ name: 'bedroom' }">Bedroom</router-link>`
       - And for the Bathroom: `<router-link :to="{ name: 'bathroom' }">Bathroom</router-link>`

2. **Dynamic Navigation with Buttons:**
   - Choose a room component, such as `Kitchen.vue`, and add a button that, when clicked, programmatically navigates the user to another room, like the Living Room. To do this, use `this.$router.push('/living-room')` within the button's click event handler.
   - Add another button to the same component (`Kitchen.vue`) that, when clicked, takes the user back to the previous page. Implement this by using `this.$router.go(-1)` in the click event handler.
3. **Refactoring navigation paths**
   - Now change all the route URLs to with `/room/`, so that e.g. the `bedrom` has URL like `/room/bedrom`, the kitchen gets URL like `/room/kitchen`, etc.
   - fix so that app works as before
   - reflect on what you changes was needed for the different types of routes. Which type was less work to change the URL.

#### Part 4: Advanced Routing Features
1. **Dynamic Routing:**
   - Add a route for a `Gallery` room with a dynamic path parameter (e.g., `/gallery/:pictureId`). Use this parameter in the `Gallery` component to display specific content.
   - in the App.vue, add two navigation links with URL params for two different images (of your choice) and make sure those images are shown in the gallery when clicking on the respective navigation links.
2. **Nested Routes:**
   - Create a `House.vue` component as a nested layout that includes several rooms. Define children routes within the `House` route to include `LivingRoom`, `Kitchen`, etc., as nested routes.

#### Part 5: Navigation Guards and Router Hooks
1. **Global and Component-level Guards:**
   - Use `router.beforeEach` or other hooks to log a message about what room that the user is leaving, and what room the user is entering in the console every time a navigation happens.
   - In `Kitchen.vue`, use `onBeforeRouteLeave` to show a confirmation dialog asking "Did you clean up after yourself?" when the user attempts to navigate away from the kitchen (simulate unsaved changes).
2. **Error Handling and Redirects:**
   - Define a route for handling unknown paths, redirecting to a `NotFound.vue` component.
   - Optionally, create a redirect from `/` to `/living-room` to set the living room as the homepage.

#### Part 6: Performance Optimizations
1. **Lazy Loading Components:** (Advanced/Optional)
   - Modify the route definitions to use dynamic imports for lazy loading components. This optimizes initial load time by splitting the codebase into smaller chunks.

Through these steps, you'll build a Vue.js application that demonstrates comprehensive routing capabilities, adhering to the house theme. Each step is designed to reinforce your understanding of Vue Router's features and best practices.

Enjoy!
