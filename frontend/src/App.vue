<template>
    <div class="app">

        <nav class="navbar">

            <h1>Student Task Manager</h1>

            <div class="links">

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/courses">Courses</RouterLink>
    <RouterLink to="/tasks">Tasks</RouterLink>

    <RouterLink
        v-if="!authStore.user"
        to="/login"
    >
        Login
    </RouterLink>

    <RouterLink
        v-if="!authStore.user"
        to="/register"
    >
        Register
    </RouterLink>

    <button
        v-if="authStore.user"
        class="logout"
        @click="logout"
    >
        Logout
    </button>

</div>

        </nav>

        <main class="content">
            <RouterView />
        </main>

        <footer class="footer">
            Student Task Manager © 2026
        </footer>

    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {

    authStore.init();

});

const logout = async () => {

    if (!authStore.user) return;

    try {

        await authStore.logout();

        alert("Te-ai delogat.");

        router.push("/login");

    } catch (error) {

        console.error(error);

    }

};
</script>

<style scoped>

* {
    box-sizing: border-box;
}

.app {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.navbar {
    background-color: #2c3e50;
    color: white;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.navbar h1 {
    margin: 0;
    font-size: 24px;
}

.links {
    display: flex;
    gap: 18px;
    align-items: center;
}

.links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.links a:hover {
    text-decoration: underline;
}

.logout {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
}

.content {
    max-width: 1000px;
    margin: 30px auto;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 40px;
}

@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .links {
        flex-wrap: wrap;
        justify-content: center;
    }

    .content {
        margin: 15px;
        padding: 20px;
    }

}

</style>