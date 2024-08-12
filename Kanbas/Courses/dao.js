import model from "./model.js";

export const getAllCourses = () => model.find();

export const updateCourse = (course_id, course) => model.updateOne({ _id: course_id }, { $set: course });

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
};

export const deleteCourse = (course_id) => model.deleteOne({ _id: course_id });

export const getEnrolledCourses = (user_id) => model.find({ users: user_id });

export const getAuthCourses = (auth_id) => model.find({ author: auth_id });

export const getUnenrolledCourses = (user_id) => model.find({ users: { $ne: user_id } });

export const enrollCourse = (course_id, user_id) => model.updateOne({ _id: course_id }, { $push: { users: user_id } });

