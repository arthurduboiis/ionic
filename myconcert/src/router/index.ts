import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import NewConcertPage from '../views/NewConcertPage.vue'
import ManageCategoryPage from '../views/ManageCategoryPage.vue'
import ManageUsersPage from '../views/ManageUsersPage.vue'
import ConcertPage from '../views/ConcertPage.vue'
import NewCategoryPage from '../views/NewCategoryPage.vue'
import NewUserPage from '../views/NewUserPage.vue'
import EditCategoryPage from '../views/EditCategoryPage.vue'
import EditConcertPage from '../views/EditConcertPage.vue'
import ConcertDetailPage from '../views/ConcertDetailPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/concert/new',
    name: 'NewConcert',
    component: NewConcertPage
  },
  {
    path: '/concert',
    name: 'Concert',
    component: ConcertPage
  },
  {
    path: '/concert/:id',
    name: 'ConcertDetails',
    component: ConcertDetailPage
  },
  {
    path: '/concert/edit/:id',
    name: 'EditConcert',
    component: EditConcertPage
  },
  {
    path: '/category/manage',
    name: 'ManageCategory',
    component: ManageCategoryPage
  },
  {
    path: '/users/manage',
    name: 'ManageUsers',
    component: ManageUsersPage
  },
  {
    path: '/users/new',
    name: 'NewUser',
    component: NewUserPage
  },
  {
    path: '/category/new',
    name: 'NewCategory',
    component: NewCategoryPage
  },
  {
    path: '/category/edit/:id',
    name: 'EditCategory',
    component: EditCategoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
