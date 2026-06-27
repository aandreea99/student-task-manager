const express = require("express");
const router = express.Router();

const {
    getCourses,
    createCourse
} = require("../controllers/coursesController");

router.get("/", getCourses);

router.post("/", (req, res, next) => {
    console.log("POST route reached");
    next();
}, createCourse);

module.exports = router;
