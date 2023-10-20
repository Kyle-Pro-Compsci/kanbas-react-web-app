import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Kanbas/KanbasNavigation/navbar.css";
import "./Kanbas/Courses/CourseNavigation/course-navigation.css"
import "./Kanbas/kanbas.css";

function App() {
    return (
        <HashRouter>
            <div>
                <Nav/>
                <Routes>
                    <Route path="/"         element={<Navigate to="/Labs"/>}/>
                    <Route path="/hello"    element={<HelloWorld />} />
                    <Route path="/Labs/*"   element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;