import { createRouter, createWebHashHistory } from 'vue-router'
import MobilePage from '../components/Mainpage/indexMobile.vue'
import PCPage from '../components/Mainpage/index.vue'

const routes = [
    {
      path: "/",
      name: "Fulfillment China",
      component: window.innerWidth < 768 ? MobilePage : PCPage,
      meta: { title: 'Fulfillment China' },
    },
  ]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router
