import Vue from 'vue'
import VueRouter from 'vue-router'
import Entry from '../layouts/Entry.vue'
import Features from '../layouts/Features.vue'
import HomePage from '../layouts/HomePage.vue'
import Login from '../views/entries/Login.vue'
import Dashboard from '../views/homepage/Dashboard.vue'
import Messaging from '../views/features/Messaging.vue'
import PodcastAndMusic from '../views/features/PodcastAndMusic.vue'
import Pomodoro from '../views/features/Pomodoro.vue'
import Profile from '../views/features/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/login',
    component: Entry,
    children: [
      {
        path: '',
        component: Login,
      },
    ],
  },
  {
    path: '/register',
    component: Entry,
    children: [
      {
        path: '',
        component: () => import('../views/entries/Register.vue')
      },
    ],
  },
  {
    path: '/home',
    component: HomePage,
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/features',
    component: Features,
    children: [
      {
        name: 'PodcastAndMusic',
        path: 'player',
        component: PodcastAndMusic,
      },
      {
        name: 'Messaging',
        path: 'messaging',
        component: Messaging,
      },
      {
        name: 'Pomodoro',
        path: 'pomodoro',
        component: Pomodoro,
      },
      {
        name: 'Profile',
        path: 'profile',
        component: Profile,
      },
    ],
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
