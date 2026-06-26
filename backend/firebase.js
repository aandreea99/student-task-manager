const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./student-task-manager-46547-firebase-adminsdk-fbsvc-d2f7046fec.json");

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = db;