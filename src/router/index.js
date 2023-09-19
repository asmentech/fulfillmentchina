import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
          path: '/client',
          name: "client",
          component: () => import("../views/Client/index.vue"),
          meta: { title: 'client' }
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
          path: '/clientDetails',
          name: "clientDetails",
          component: () => import("../views/Client/details.vue"),
          meta: { title: 'clientDetails' }
        },
        {
          path: '/storageDetails',
          name: "storageDetails",
          component: () => import("../views/Inventory/details.vue"),
          meta: { title: 'storageDetails' }
        },
        {
          path: '/shipmentDetails',
          name: "shipmentDetails",
          component: () => import("../views/Shiptofba/details.vue"),
          meta: { title: 'shipmentDetails' }
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

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router
