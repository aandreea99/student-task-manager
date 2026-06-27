<template>
    <div>

        <h2>Courses</h2>

        <CourseForm />

        <div v-if="courses.length === 0">
            Nu există materii.
        </div>

        <CourseList
            v-else
            :courses="courses"
        />

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import api from "../services/api";

import CourseList from "../components/CourseList.vue";
import CourseForm from "../components/CourseForm.vue";

const courses = ref([]);

const loadCourses = async () => {

    try {

        const response = await api.get("/courses");

        courses.value = response.data;

    } catch (error) {

        console.error(error);

    }

};

onMounted(() => {

    loadCourses();

});
</script>