const db = require("../firebase");

const getTasks = async (req, res) => {
    try {
        const snapshot = await db.collection("tasks").get();

        const tasks = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Eroare la citirea temelor."
        });
    }
};

module.exports = {
    getTasks
};