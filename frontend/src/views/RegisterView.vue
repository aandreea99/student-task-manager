<template>

    <h2>Înregistrare</h2>

    <form @submit.prevent="register">

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
            Înregistrare
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

const register = async () => {

    try {

        await authStore.register(email.value, password.value);

        alert("Cont creat cu succes!");

        router.push("/login");

    } catch (error) {

        alert("Nu s-a putut crea contul.");

        console.error(error);

    }

};
</script>