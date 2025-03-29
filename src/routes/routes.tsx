
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogsPage from "../pages/BlogsPage";

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
    }
])
