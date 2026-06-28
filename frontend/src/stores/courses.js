import { defineStore } from "pinia";
import api from "../services/api";

export const useCoursesStore = defineStore("courses", {

    state: () => ({
        courses: []
    }),

    actions: {

        async loadCourses() {

            try {

                const response = await api.get("/courses");

                this.courses = response.data;

            } catch (error) {

                console.error(error);

            }

        },

        async addCourse(course) {

            try {

                await api.post("/courses", course);

                alert("Materia a fost adăugată!");

                await this.loadCourses();

            } catch (error) {

                console.error(error);

            }

        },

        async updateCourse(id, course) {

            try {

                await api.put(`/courses/${id}`, course);

                alert("Materia a fost modificată!");

                await this.loadCourses();

            } catch (error) {

                console.error(error);

            }

        },

        async deleteCourse(id) {

            const confirmDelete = confirm("Sigur dorești să ștergi această materie?");

            if (!confirmDelete) {
                return;
            }

            try {

                await api.delete(`/courses/${id}`);

                alert("Materia a fost ștearsă!");

                await this.loadCourses();

            } catch (error) {

                console.error(error);

            }

        }

    }

});