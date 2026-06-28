<template>
    <h3>Adaugă temă</h3>

    <form @submit.prevent="saveTask">

        <div>
            <label>Titlu</label><br>
            <input v-model="task.title" type="text">
        </div>

        <br>

        <div>
            <label>Descriere</label><br>
            <input v-model="task.description" type="text">
        </div>

        <br>

        <div>
            <label>Data limită</label><br>
            <input v-model="task.dueDate" type="date">
        </div>

        <br>

        <div>
            <label>Prioritate</label><br>
            <select v-model="task.priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>

        <br>

        <div>
            <label>Status</label><br>
            <select v-model="task.status">
                <option>În progres</option>
                <option>Finalizată</option>
            </select>
        </div>

        <br>

        <div>
            <label>Materie</label><br>

            <select v-model="task.course">
                <option disabled :value="null">
                    Selectează materia
                </option>

                <option
                    v-for="course in coursesStore.courses"
                    :key="course.id"
                    :value="{ id: course.id, name: course.name }"
                >
                    {{ course.name }}
                </option>
            </select>
        </div>

        <br>

        <button type="submit">
            Adaugă
        </button>

    </form>
</template>

<script setup>
import { reactive, onMounted } from "vue";

import { useTasksStore } from "../stores/tasks";
import { useCoursesStore } from "../stores/courses";

const tasksStore = useTasksStore();
const coursesStore = useCoursesStore();

onMounted(() => {
    coursesStore.loadCourses();
});



const task = reactive({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    status: "În progres",
    course: null
});

const saveTask = async () => {

    if (
        !task.title.trim() ||
        !task.description.trim() ||
        !task.course ||
        !task.dueDate
    ) {

        alert("Completează toate câmpurile!");

        return;

    }

    try {

        await tasksStore.addTask(task);

        alert("Tema a fost adăugată!");

        task.title = "";
        task.description = "";
        task.dueDate = "";
        task.priority = "Medium";
        task.status = "În progres";
        task.course = null;

    } catch (error) {

        console.error(error);

    }

};
</script>