<template>
    <ul>
        <li
            v-for="course in courses"
            :key="course.id"
        >
            <strong>{{ course.name }}</strong><br>

            Profesor: {{ course.professor }}<br>

            Semestru: {{ course.semester }}

            <br><br>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    courses: Array
});
</script>