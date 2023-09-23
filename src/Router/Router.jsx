import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../assets/Layout/Mainlayout";

const mycreatedrouter =createBrowserRouter([
    {
        path:'/',
        element: <Mainlayout></Mainlayout>
    }
])


export default mycreatedrouter;