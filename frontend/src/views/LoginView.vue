<template>

    <h2>Autentificare</h2>

    <form @submit.prevent="login">

        <div>
            <label>Email</label><br>

            <input
                v-model="email"
                type="email"
            >
        </div>

        <br>

        <div>
            <label>Parolă</label><br>

            <input
                v-model="password"
                type="password"
            >
        </div>

        <br>

        <button type="submit">
            Login
        </button>

    </form>

</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const login = async () => {

    try {

        await authStore.login(email.value, password.value);

        alert("Autentificare reușită!");

        router.push("/");

    } catch (error) {

        alert("Email sau parolă greșită.");

        console.error(error);

    }

};
</script>