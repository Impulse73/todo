import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTask from "../components/AddTask";
import ListTasks from "../components/ListTasks";
import DeletedListTasks from "../components/DeletedListTasks";

Vue.use(VueRouter)

const routes = [
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/add',
        name: 'addTask',
        component: AddTask
    },
    {
        path: '/list',
        name: 'list',
        component: ListTasks
    },
    {
        path: '/list/id',
        name: 'edit',
        component: AddTask
    },
    {
        path: '/deletedList',
        name: 'deleted',
        component: DeletedListTasks
    }
]

const router = new VueRouter({
    routes
})

export default router
