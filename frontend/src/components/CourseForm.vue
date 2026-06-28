<template>

    <h3>Adaugă materie</h3>

    <form @submit.prevent="saveCourse">

        <div>
            <label>Nume</label><br>

            <input
                v-model="course.name"
                type="text"
            >
        </div>

        <br>

        <div>
            <label>Profesor</label><br>

            <input
                v-model="course.professor"
                type="text"
            >
        </div>

        <br>

        <div>
            <label>Semestru</label><br>

            <input
                v-model="course.semester"
                type="number"
            >
        </div>

        <br>

        <button type="submit">
            Adaugă
        </button>

    </form>

</template>

<script setup>
import { reactive } from "vue";
import { useCoursesStore } from "../stores/courses";

const coursesStore = useCoursesStore();

const course = reactive({
    name: "",
    professor: "",
    semester: 1
});

const saveCourse = async () => {

    if (
        !course.name.trim() ||
        !course.professor.trim() ||
        !course.semester
    ) {

        alert("Completează toate câmpurile!");

        return;

    }

    try {

        await coursesStore.addCourse(course);

        alert("Materia a fost adăugată!");

        course.name = "";
        course.professor = "";
        course.semester = 1;

    } catch (error) {

        console.error(error);

    }

};
</script>