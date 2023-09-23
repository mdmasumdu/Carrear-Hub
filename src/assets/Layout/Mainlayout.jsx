import { Outlet } from "react-router-dom";
import Home from "./Unchange/Home";


const Mainlayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;