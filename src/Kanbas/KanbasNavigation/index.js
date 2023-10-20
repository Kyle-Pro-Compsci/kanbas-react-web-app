import { Link, useLocation } from "react-router-dom";
import {HiClipboard, HiUserCircle, HiBookOpen, HiCalendar} from "react-icons/hi";
// import "./navbar.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const { pathname } = useLocation();
    const style = {color: "red", fontSize: "1.5em"}
    links.map((link, index) => console.log(link, index));
    return (
        <div className="list-group nav-sidebar">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link === "Account" && <HiUserCircle style = {style}/>}
                    {link === "Dashboard" && <HiClipboard style = {style}/>}
                    {link === "Courses" && <HiBookOpen style = {style}/>}
                    {link === "Calendar" && <HiCalendar style = {style}/>}
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;