import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CoursesView from "../views/CoursesView.vue";
import TasksView from "../views/TasksView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/courses",
            component: CoursesView
        },
        {
            path: "/tasks",
            component: TasksView
        },
        {
            path: "/login",
            component: LoginView
        },
        {
            path: "/register",
            component: RegisterView
        }
    ]
});

export default router;