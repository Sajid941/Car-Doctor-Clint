import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
    return (
        <div>
            <div className="lg:max-w-7xl mx-auto">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;