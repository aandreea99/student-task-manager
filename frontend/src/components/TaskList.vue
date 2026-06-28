<template>

    <div class="tasks">

        <div
            class="task-card"
            v-for="task in tasks"
            :key="task.id"
        >

            <h3>{{ task.title }}</h3>

            <p>
                <strong>Descriere:</strong>
                {{ task.description }}
            </p>

            <p>
                <strong>Materie:</strong>
                {{ task.course.name }}
            </p>

            <p>
                <strong>Prioritate:</strong>
                {{ task.priority }}
            </p>

            <p>
                <strong>Status:</strong>
                {{ task.status }}
            </p>

            <p>
                <strong>Data limită:</strong>
                {{ task.dueDate }}
            </p>

            <div class="buttons">

                <button @click="editTask(task)">
                    Modifică
                </button>

                <button
                    class="delete"
                    @click="deleteTask(task.id)"
                >
                    Șterge
                </button>

            </div>

        </div>

    </div>

</template>

<script setup>
import { useTasksStore } from "../stores/tasks";

defineProps({
    tasks: Array
});

const tasksStore = useTasksStore();

const editTask = async (task) => {

    const title = prompt("Titlu:", task.title);

    if (title === null) return;

    const description = prompt("Descriere:", task.description);

    if (description === null) return;

    const priority = prompt(
        "Prioritate (Low, Medium, High):",
        task.priority
    );

    if (priority === null) return;

    const status = prompt(
        "Status (În progres / Finalizată):",
        task.status
    );

    if (status === null) return;

    const dueDate = prompt(
        "Data limită (YYYY-MM-DD):",
        task.dueDate
    );

    if (dueDate === null) return;

    await tasksStore.updateTask(task.id, {
        title,
        description,
        priority,
        status,
        dueDate,
        course: task.course,
        metadata: task.metadata
    });

};

const deleteTask = async (id) => {

    await tasksStore.deleteTask(id);

};
</script>

<style scoped>

.tasks {

    display: grid;
    gap: 20px;

}

.task-card {

    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);

}

.task-card h3 {

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