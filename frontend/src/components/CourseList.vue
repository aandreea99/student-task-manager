<template>
    <div class="courses">

        <div
            class="course-card"
            v-for="course in courses"
            :key="course.id"
        >

            <h3>{{ course.name }}</h3>

            <p>
                <strong>Profesor:</strong>
                {{ course.professor }}
            </p>

            <p>
                <strong>Semestru:</strong>
                {{ course.semester }}
            </p>

            <div class="buttons">

                <button @click="editCourse(course)">
                    Modifică
                </button>

                <button
                    class="delete"
                    @click="deleteCourse(course.id)"
                >
                    Șterge
                </button>

            </div>

        </div>

    </div>
</template>

<script setup>
import { useCoursesStore } from "../stores/courses";

defineProps({
    courses: Array
});

const coursesStore = useCoursesStore();

const editCourse = async (course) => {

    const name = prompt("Numele materiei:", course.name);

    if (name === null) return;

    const professor = prompt("Profesor:", course.professor);

    if (professor === null) return;

    const semester = prompt("Semestru:", course.semester);

    if (semester === null) return;

    await coursesStore.updateCourse(course.id, {
        name,
        professor,
        semester: Number(semester)
    });

};

const deleteCourse = async (id) => {

    await coursesStore.deleteCourse(id);

};
</script>

<style scoped>

.courses {

    display: grid;
    gap: 20px;

}

.course-card {

    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);

}

.course-card h3 {

    margin-top: 0;
    color: #2c3e50;

}

.buttons {

    margin-top: 15px;
    display: flex;
    gap: 10px;

}

button {

    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    background: #3498db;
    color: white;
    cursor: pointer;

}

button:hover {

    opacity: 0.9;

}

.delete {

    background: #e74c3c;

}

@media (max-width: 768px) {

    .buttons {

        flex-direction: column;

    }

}

</style>