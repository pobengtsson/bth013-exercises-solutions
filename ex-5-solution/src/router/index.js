import { createRouter, createWebHistory } from 'vue-router';
import LivingRoom from '../components/LivingRoom.vue';
import Kitchen from '../components/Kitchen.vue';
import Bedroom from '../components/Bedroom.vue';
import Bathroom from '../components/Bathroom.vue';
import Gallery from '../components/Gallery.vue';
import NotFound from '../components/NotFound.vue';
import House from '../components/House.vue';

const routes = [
  { path: '/', redirect: '/room/living-room' },
  {
    path: '/room',
    component: House,
    children: [
      { name: 'living-room', path: 'living-room', component: LivingRoom },
      { name: 'kitchen', path: 'kitchen', component: Kitchen, props: { defaultProp: 'defaultValue' } },
      { name: 'bedroom', path: 'bedroom', component: Bedroom },
      { name: 'bathroom', path: 'bathroom', component: Bathroom },
      { name: 'gallery', path: 'gallery/:pictureId', component: Gallery }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(`Navigating from ${from.name} to ${to.name}`);
});

export default router;
