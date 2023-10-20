import db from "../../Kanbas/Database";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const breadcrumb_style = {breadcrumbDivider: ">"};
    const { pathname } = useLocation();
    var path_parts = pathname.split('/');
    var course_section = path_parts[path_parts.length - 1];
    console.log(pathname);
    return (
        <div className="d-flex flex-column">
            <div>
                <nav style={breadcrumb_style} aria-label="breadcrumb" className="breadcrumb-header">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">{course.number + " " + course.name}</li>
                        <li className="breadcrumb-item">{course_section}</li>
                    </ol>
                </nav>
                <h1>Course {course.name}</h1>
                <hr />
            </div>
            <div className="d-flex flex-row">
                <CourseNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>

            </div>
        </div>
    );
}
export default Courses;