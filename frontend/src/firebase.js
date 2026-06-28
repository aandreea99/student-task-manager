import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvYr9EDUIwZNvgAWUJe01Wq-2JpGwyWuE",
    authDomain: "student-task-manager-46547.firebaseapp.com",
    projectId: "student-task-manager-46547",
    storageBucket: "student-task-manager-46547.firebasestorage.app",
    messagingSenderId: "636218448890",
    appId: "1:636218448890:web:d2a88f4a241b2bb9bf6243"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);