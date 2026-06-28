const db = require("../firebase");

const getCourses = async (req, res) => {

    try {

        const snapshot = await db.collection("courses").get();

        const courses = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.json(courses);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la citirea materiilor."
        });

    }

};

const createCourse = async (req, res) => {

    try {

        const { name, professor, semester } = req.body;

        if (!name || !professor || !semester) {

    return res.status(400).json({
        message: "Toate câmpurile sunt obligatorii."
    });

}

        const course = {
            name,
            professor,
            semester
        };

        const docRef = await db.collection("courses").add(course);

        res.status(201).json({
            id: docRef.id,
            message: "Materia a fost adăugată."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la adăugarea materiei."
        });

    }

};

const updateCourse = async (req, res) => {

    try {

        const { id } = req.params;
        const { name, professor, semester } = req.body;

        if (!name || !professor || !semester) {
            return res.status(400).json({
                message: "Toate câmpurile sunt obligatorii."
            });
        }

        await db.collection("courses").doc(id).update({
            name,
            professor,
            semester
        });

        res.json({
            message: "Materia a fost modificată."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la modificarea materiei."
        });

    }

};

const deleteCourse = async (req, res) => {

    try {

        const { id } = req.params;

        await db.collection("courses").doc(id).delete();

        res.json({
            message: "Materia a fost ștearsă."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Eroare la ștergerea materiei."
        });

    }

};

module.exports = {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse
};