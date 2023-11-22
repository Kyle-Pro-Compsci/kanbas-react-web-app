// import { Link } from "react-router-dom";
// import db from "../Database";
// import "./dashboard.css"
// function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div className="d-flex flex-column main-window">
//       <h1>Dashboard</h1>
//       <hr />
//       <h2> Published Courses</h2>
//       <hr />
//       <div className="d-flex flex-wrap">
//         {courses.map((course) => (
//           <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card dashboard-card">
//             {/* {course.name} */}
//             <img className="card-img-top" src="/images/colorful-tile-background.jpeg"/>
//             <div className = "card-body">
//                 <h5 className="card-title">{course.number + " " + course.name}</h5>
//                 <p className="card-text">
//                     {course.startDate + " - " + course.endDate}
//                 </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Dashboard;