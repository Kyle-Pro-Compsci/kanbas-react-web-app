import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
function Kanbas() {
   return (
      <div className="d-flex">
         <KanbasNavigation />
         <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Dashboard"/>}/>
            <Route path="/Account" element={<Account/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Courses/:courseId/*" element={<Courses/>}/>
            <Route path="/Calendar" element={<Calendar/>}/>
         </Routes>
         {/* <div>
            <h1>Account</h1>
            <h1>Dashboard</h1>
            <h1>Courses</h1>
         </div> */}
      </div>

   );
}
export default Kanbas