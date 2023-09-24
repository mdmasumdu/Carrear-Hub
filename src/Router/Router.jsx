import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../assets/Layout/Mainlayout";
import Home from "../Pages.jsx/Home";
import ErrorPage from "../Components/ErrorPage";
import Applied from "../Pages.jsx/Applied";
import Statistics from "../Pages.jsx/Statistics";
import Blogs from "../Pages.jsx/Blogs";
import Jobdetails from "../Pages.jsx/Homepages/Jobdetails";

const mycreatedrouter =createBrowserRouter([
    {
        path:'/',
        element: <Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>
        
        ,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:"/applied",
                loader:()=>fetch('../jobs.json'),
                element:<Applied></Applied>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/jobs/:id",
                loader:()=>fetch(`../jobs.json`),
                element:<Jobdetails></Jobdetails>
            }
        ]
    }
    
])


export default mycreatedrouter;