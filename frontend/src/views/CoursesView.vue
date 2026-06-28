<template>
    <div>

        <h2>Courses</h2>

        <CourseForm />

        <div v-if="coursesStore.courses.length === 0">
            Nu există materii.
        </div>

        <CourseList
    v-else
    :courses="coursesStore.courses"
/>

    </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useCoursesStore } from "../stores/courses";

import CourseList from "../components/CourseList.vue";
import CourseForm from "../components/CourseForm.vue";

const coursesStore = useCoursesStore();

onMounted(() => {

    coursesStore.loadCourses();

});
</script>