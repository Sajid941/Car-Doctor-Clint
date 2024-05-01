import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
    return (
        <div className="px-5 md:px-10 lg:px-0">
            <div className="lg:max-w-7xl lg:px-5 mx-auto">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;