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

module.exports = {
    getCourses,
    createCourse
};