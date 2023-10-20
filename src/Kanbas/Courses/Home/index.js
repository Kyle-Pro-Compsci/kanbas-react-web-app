import ModuleList from "../Modules/ModuleList";
import {HiDotsVertical} from "react-icons/hi"


function Home() {
  return (
    <div className="d-flex flex-row">
        <div className="d-flex flex-column main-window">
            <div className="d-flex flex-row">
            <button type="button" className="btn btn-primary">Collapse All</button>
            <button type="button" className="btn btn-primary">View Progress</button>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Publish All</button>
            <button type="button" className="btn btn-danger">Module</button>
            <button type="button" className="btn btn-secondary"><HiDotsVertical/></button>
          </div>
            <ModuleList/>
        </div>
      <h2>Status</h2>
    </div>
  );
}
export default Home;