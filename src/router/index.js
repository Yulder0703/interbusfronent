import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardUsuario/DashboardView.vue'
import DashboardDespachadorView from '../views/DashboardDespachador/DashboardDespachadorView.vue'
import DashboardJeferodamientoView from '../views/DashboardJeferodamiento/DashboardJeferodamientoView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/DashboardUsuario/RegistroView.vue')
  },
  {
    path: '/iniciar',
    name: 'iniciar',
    component: () => import('../views/InicioView.vue')
  },

  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/DashboardUsuario/DashboardView.vue')
  },

  {
    path: '/rodamiento',
    name: 'Nuevo Rodamiento',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DashboardJeferodamiento/Rodamiento.vue')
  },
  {
    path: '/formularioencomienda',
    name: 'FormularioEncoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardUsuario/FormularioEncoView')
  },

  // dentro de este crear un sub arreglo e importarlo en la parte de arriba 

  {
    path:"/dashboard",
    component: DashboardView,
    children: [
      // {
      //   path: '/',
      //   component: () => import('../views/DashboardUsuario/View.vue')
      // },
      // //crear el link y enviarlo en sidebarcomponent
      // {
      //   path:"/",
      //   component: () => import('../views/DashboardUsuario/View.vue')
      // },
      // {
      //   path:"/",
      //   component: () => import('../views/DashboardUsuario/View.vue')
      // }
    ]

  },

  {
    path:"/dashboarddespachador",
    component: DashboardDespachadorView,
    children: [
      // {
      //   path: '/',
      //   component: () => import('../views/DashboardDespachador/View.vue')
      // },
      // //crear el link y el array enviarlo en sidebarcomponent
      // {
      //   path:"/",
      //   component: () => import('../views/DashboardDespachador/View.vue')
      // },
      // {
      //   path:"/",
      //   component: () => import('../views/DashboardDespachador/View.vue')
      // },
    ]

  },
  {
    path:"/dashboardjeferodamiento",
    component: DashboardJeferodamientoView,
    children: [
      //crear el link y el array enviarlo en sidebarcomponent
      // {
      //   path:"/",
      //   component: () => import('../views/DashboardJeferodamiento/View.vue')
      // },
      
    ]

  }
 
  
]

const router = new VueRouter({
  routes
})

export default router
