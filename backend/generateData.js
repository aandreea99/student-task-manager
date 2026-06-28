const db = require("./firebase");

async function generateData() {

    try {

        const course1 = await db.collection("courses").add({
            name: "Programare Web",
            professor: "Popescu Andrei",
            semester: 2
        });

        const course2 = await db.collection("courses").add({
            name: "Baze de date",
            professor: "Ionescu Maria",
            semester: 2
        });

        await db.collection("tasks").add({
            title: "Proiect Vue",
            description: "Realizarea unei aplicatii",
            dueDate: "2026-07-15",
            priority: "High",
            status: "In progres",

            course: {
                id: course1.id,
                name: "Programare Web"
            },

            metadata: {
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        await db.collection("tasks").add({
            title: "Tema SQL",
            description: "Exercitii JOIN",
            dueDate: "2026-07-10",
            priority: "Medium",
            status: "In progres",

            course: {
                id: course2.id,
                name: "Baze de date"
            },

            metadata: {
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        console.log("Date generate cu succes.");

        process.exit();

    } catch (error) {

        console.error(error);

    }

}

generateData();