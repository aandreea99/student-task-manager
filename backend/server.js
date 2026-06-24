const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const courses = [
    {
        id: 1,
        name: "Tehnologii Internet"
    },
    {
        id: 2,
        name: "Programare Java"
    }
];

const tasks = [
    {
        id: 1,
        title: "Proiect TIC",
        status: "In progres",
        courseId: 1
    },
    {
        id: 2,
        title: "Tema Java",
        status: "Finalizata",
        courseId: 2
    }
];

app.get("/", (req, res) => {
    res.send("Aplicatia Student Task Manager functioneaza!");
});

app.get("/api/courses", (req, res) => {
    res.json(courses);
});

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server pornit pe portul ${PORT}`);
});