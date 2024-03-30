import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../components/EventList.vue'
import AddEvent from '../components/AddEvent.vue'
import EditEvent from '../components/EditEvent.vue'
import EventCalendar from '../components/EventCalendar.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/calendar',
    name: 'event-calendar',
    component: EventCalendar
  },
  {
    path: '/add-event',
    name: 'add-event',
    component: AddEvent
  },
  {
    path: '/edit-event/:id',
    name: 'EditEvent',
    component: EditEvent,
    props: true // This allows us to use the `id` parameter as a prop in the EditEvent component
  }
  // Include other routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
