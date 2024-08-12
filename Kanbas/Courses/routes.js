import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    app.post("/api/courses", createCourse);

    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    };
    app.delete("/api/courses/:id", deleteCourse);

    const updateCourse = async (req, res) => {
        const course = await dao.updateCourse(req.body._id, req.body);
        res.send(course);
    };
    app.put("/api/courses/:id", updateCourse);

    const getAllCourses = async (req, res) => {
        const courses = await dao.getAllCourses();
        res.send(courses);
    };
    app.get("/api/courses", getAllCourses);

    const getEnrolledCourses = async (req, res) => {
        const courses = await dao.getEnrolledCourses(req.params.uid);
        res.send(courses);
    };
    app.get("/api/courses/:uid", getEnrolledCourses);

    const getAuthCourses = async (req, res) => {
        const courses = await dao.getAuthCourses(req.params.authid);
        res.send(courses);
    };
    app.get("/api/courses/auth/:authid", getAuthCourses);

    const getUnenrolledCourses = async (req, res) => {
        const courses = await dao.getUnenrolledCourses(req.params.uid);
        res.send(courses);
    };
    app.get("/api/courses/unenrolled/:uid", getUnenrolledCourses);

    const enrollCourse = async (req, res) => {
        const course = await dao.enrollCourse(req.params.cid, req.params.uid);
        res.send(course);
    };
    app.put("/api/courses/:cid/enroll/:uid", enrollCourse);
}
