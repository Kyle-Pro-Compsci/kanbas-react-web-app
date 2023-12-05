import { Navigate, Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";

import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
function Kanbas() {
   // A5 work in /Dashboard
   return (
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation />
            <Routes>
               <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
               <Route path="/Account" element={<Account />} />
               <Route path="/Account/:id" element={<Account />} />
               <Route path="/Dashboard" element={<Dashboard />} />
               <Route path="/Courses/:courseId/*" element={<Courses />} />
               <Route path="/Calendar" element={<Calendar />} />
               <Route path="/Signin" element={<Signin />} />
               <Route path="/Signup" element={<Signup />} />
               <Route path="/admin/users" element={<UserTable/>}/>
            </Routes>
            {/* <div>
            <h1>Account</h1>
            <h1>Dashboard</h1>
            <h1>Courses</h1>
         </div> */}
         </div>
      </Provider>
   );
}
export default Kanbas