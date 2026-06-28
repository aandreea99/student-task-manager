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

const createTask = async (req, res) => {

    try {

        const { title, description, priority, status, dueDate, course } = req.body;

        if (!title || !description || !dueDate || !course) {
            return res.status(400).json({
                message: "Toate câmpurile sunt obligatorii."
            });
        }

        const task = {
            title,
            description,
            priority,
            status,
            dueDate,
            course: {
                id: course.id,
                name: course.name
            },
            metadata: {
                createdAt: new Date(),
                updatedAt: new Date()
            }
        };

        const docRef = await db.collection("tasks").add(task);

        res.status(201).json({
            id: docRef.id,
            message: "Tema a fost adăugată."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la adăugarea temei."
        });

    }

};

const updateTask = async (req, res) => {

    try {

        const { id } = req.params;
        const { title, description, priority, status, dueDate, course } = req.body;

        if (!title || !description || !dueDate || !course) {
            return res.status(400).json({
                message: "Toate câmpurile sunt obligatorii."
            });
        }

        await db.collection("tasks").doc(id).update({
            title,
            description,
            priority,
            status,
            dueDate,
            course: {
                id: course.id,
                name: course.name
            },
            "metadata.updatedAt": new Date()
        });

        res.json({
            message: "Tema a fost modificată."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la modificarea temei."
        });

    }

};

const deleteTask = async (req, res) => {

    try {

        const { id } = req.params;

        await db.collection("tasks").doc(id).delete();

        res.json({
            message: "Tema a fost ștearsă."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la ștergerea temei."
        });

    }

};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};