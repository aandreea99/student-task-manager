import { defineStore } from "pinia";
import api from "../services/api";

export const useTasksStore = defineStore("tasks", {

    state: () => ({
        tasks: []
    }),

    actions: {

        async loadTasks() {

            try {

                const response = await api.get("/tasks");

                this.tasks = response.data;

            } catch (error) {

                console.error(error);

            }

        },

        async addTask(task) {

            try {

                await api.post("/tasks", task);

                alert("Tema a fost adăugată!");

                await this.loadTasks();

            } catch (error) {

                console.error(error);

            }

        },

        async updateTask(id, task) {

            try {

                await api.put(`/tasks/${id}`, task);

                alert("Tema a fost modificată!");

                await this.loadTasks();

            } catch (error) {

                console.error(error);

            }

        },

        async deleteTask(id) {

            const confirmDelete = confirm("Sigur dorești să ștergi această temă?");

            if (!confirmDelete) {
                return;
            }

            try {

                await api.delete(`/tasks/${id}`);

                alert("Tema a fost ștearsă!");

                await this.loadTasks();

            } catch (error) {

                console.error(error);

            }

        }

    }

});