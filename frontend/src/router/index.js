import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CoursesView from "../views/CoursesView.vue";
import TasksView from "../views/TasksView.vue";

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
        }
    ]
});

export default router;