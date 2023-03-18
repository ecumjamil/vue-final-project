import { createRouter, createWebHistory } from "vue-router";
import RepoPage from '../views/RepoPage.vue'
import DetailsPage from '../views/DetailsPage.vue'
import NotFound from '../views/NotFound'
import HomePage from '../views/HomePage'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/repo',
        name: 'RepoPage',
        component: RepoPage
    },
    {
        path: '/details/:id',
        name: 'DetailsPage',
        component: DetailsPage
    },
    {
        path: '/:catchAll(.*)',
        name : 'NotFound',
        component: NotFound
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router;