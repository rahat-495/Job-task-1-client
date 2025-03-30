
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogsPage from "../pages/BlogsPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export const router = createBrowserRouter([
    {
        path : '/' ,
        element : <App /> ,
        children : [
            {
                index : true ,
                element : <BlogsPage />
            }
        ]
    },
    {
        path : '/login' ,
        element : <Login />
    },
    {
        path : '/register' ,
        element : <Register />
    },
])
