import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import db from "../Database";
import "./dashboard.css"
import axios from "axios";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = "http://localhost:4000/api/courses";
  const URL = `${API_BASE}/api/courses`
  console.log(`URL: ${URL}`)
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
    console.log(courses);
  }, []);


  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses
    ]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter((course) => course._id.$oid !== courseId));
  };

  const updateCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(
      courses.map((c) => {
        if (c._id.$oid === course._id.$oid) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
  };

  return (
    <div className="d-flex flex-column main-window">
      {/* <ul>
        {courses.map((course) => (
          <li>
            {course._id.$oid}
          </li>
        ))}
      </ul> */}
      <h1>Dashboard</h1>

      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button onClick={addNewCourse} >
        Add
      </button>

      <button onClick={updateCourse} >
        Update
      </button>


      <hr />
      <h2> Published Courses</h2>
      <hr />
      <div className="d-flex flex-wrap">
        {courses.map((course) => (
          <Link key={course._id.$oid} to={`/Kanbas/Courses/${course.number}`} className="card dashboard-card">
            {/* {course.name} */}
            <img className="card-img-top" src="/images/colorful-tile-background.jpeg" />
            <div className="card-body">
              <h5 className="card-title">{course.number + " " + course.name}</h5>
              <p className="card-text">
                {course.startDate + " - " + course.endDate}
              </p>

              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>


              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id.$oid);
                }}>
                Delete
              </button>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;