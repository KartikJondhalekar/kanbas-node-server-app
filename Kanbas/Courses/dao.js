import model from "./model.js";

export const getAllCourses = () => model.find();

export const updateCourse = (course_id, course) => model.updateOne({ _id: course_id }, { $set: course });

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
};

export const deleteCourse = (course_id) => model.deleteOne({ _id: course_id });