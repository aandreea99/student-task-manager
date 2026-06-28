import { defineStore } from "pinia";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase";

export const useAuthStore = defineStore("auth", {

    state: () => ({
        user: null
    }),

    actions: {

        init() {

            onAuthStateChanged(auth, (user) => {

                this.user = user;

            });

        },

        async register(email, password) {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            this.user = userCredential.user;

        },

        async login(email, password) {

            const userCredential =
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            this.user = userCredential.user;

        },

        async logout() {

            await signOut(auth);

            this.user = null;

        }

    }

});