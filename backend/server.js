const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const coursesRoutes = require("./routes/coursesRoutes");

const tasksRoutes = require("./routes/tasksRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Aplicatia Student Task Manager functioneaza!");
});

app.use("/api/courses", coursesRoutes);
app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server pornit pe portul ${PORT}`);
});