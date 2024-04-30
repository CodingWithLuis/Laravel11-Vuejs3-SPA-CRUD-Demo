import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'categories.index',
        component: () => import('@/components/categories/Index.vue')
    },
    {
        path: '/categories/create',
        name: 'categories.create',
        component: () => import('@/components/categories/Create.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
