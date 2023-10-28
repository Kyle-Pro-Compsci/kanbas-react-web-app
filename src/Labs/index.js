import Assignment3 from "./a3";
import {Route, Routes} from "react-router-dom";
import LabNav from "./lab-nav";
import Assignment4 from "./a4";

function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <LabNav/>
            <Routes>
                <Route path="a3" element={<Assignment3/>}/>
                <Route path="a4" element={<Assignment4/>}/>
            </Routes>
        </div>
    );
}
export default Labs;