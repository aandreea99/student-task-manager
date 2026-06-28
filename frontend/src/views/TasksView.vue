<template>
    <div>

        <h2>Tasks</h2>

        <TaskForm />

        <br>

        <div v-if="tasksStore.tasks.length === 0">
            Nu există teme.
        </div>

        <TaskList
            v-else
            :tasks="tasksStore.tasks"
        />

    </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useTasksStore } from "../stores/tasks";

import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";

const tasksStore = useTasksStore();

onMounted(() => {
    tasksStore.loadTasks();
});
</script>