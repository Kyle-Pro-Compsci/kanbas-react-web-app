import { Link, useLocation } from "react-router-dom";
function LabNav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-tabs mt-2">
            <Link to="a3"
                className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
            <Link to="a4"
                className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}>A4</Link>
        </nav>
    );
}
export default LabNav;