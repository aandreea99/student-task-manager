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
import api from "../services/api";

const course = reactive({
    name: "",
    professor: "",
    semester: 1
});

const saveCourse = async () => {

    console.log("Am apăsat butonul");

    try {

        await api.post("/courses", course);

        alert("Materia a fost adăugată!");

        course.name = "";
        course.professor = "";
        course.semester = 1;

    } catch (error) {

        console.log(error.response);
        console.error(error);

    }

};
</script>