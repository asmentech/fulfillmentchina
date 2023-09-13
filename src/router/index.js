import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("../components/Layout.vue"),
      meta: { title: 'Fulfillment China' },
      redirect: '/login',
      children: [
        {
          path: '/dashboard',
          name: "dashboard",
          component: () => import("../views/Dashboard/index.vue"),
          meta: { title: 'dashboard' }
        },
        {
          path: '/warehouse',
          name: "warehouse",
          component: () => import("../views/Warehouse/index.vue"),
          meta: { title: 'warehouse' }
        },
        {
          path: '/shiptofba',
          name: "shiptofba",
          component: () => import("../views/Shiptofba/index.vue"),
          meta: { title: 'shiptofba' }
        },
        {
          path: '/products',
          name: "products",
          component: () => import("../views/Products/index.vue"),
          meta: { title: 'products' }
        },
        {
          path: '/inventory',
          name: "inventory",
          component: () => import("../views/Inventory/index.vue"),
          meta: { title: 'inventory' }
        },
        {
          path: '/billing',
          name: "billing",
          component: () => import("../views/Billing/index.vue"),
          meta: { title: 'billing' }
        },
        {
          path: '/profile',
          name: "profile",
          component: () => import("../views/Profile/index.vue"),
          meta: { title: 'profile' }
        },
        {
          path: '/support',
          name: "support",
          component: () => import("../views/Support/index.vue"),
          meta: { title: 'support' }
        },
        {
          path: '/newShipment',
          name: "newShipment",
          component: () => import("../views/Dashboard/newShipment.vue"),
          meta: { title: 'newShipment' }
        },
        {
          path: '/newProduct',
          name: "newProduct",
          component: () => import("../views/Dashboard/newProduct.vue"),
          meta: { title: 'newProduct' }
        },
        {
          path: '/newStorage',
          name: "newStorage",
          component: () => import("../views/Products/newStorage.vue"),
          meta: { title: 'newStorage' }
        },
        {
          path: '/productDetails',
          name: "productDetails",
          component: () => import("../views/Products/details.vue"),
          meta: { title: 'productDetails' }
        },
        {
          path: '/fcorder',
          name: "fcorder",
          component: () => import("../views/Warehouse/newFcorder.vue"),
          meta: { title: 'fcorder' }
        },
      ]
    },
    {
      path: '/login',
      name: "login",
      component: () => import("../views/Login/index.vue"),
      meta: { title: 'login' }
    }
  ]
})

export default router
