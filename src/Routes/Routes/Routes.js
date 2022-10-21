import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Terms from "../../Pages/Others/Terms/Terms";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://news-365-server.vercel.app/news')
            },
            {
                path:'/category/:id',
                element:<Catagory></Catagory>,
                loader:({params})=>fetch(`https://news-365-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivetRoute><News></News></PrivetRoute>,
                loader:({params})=>fetch(`https://news-365-server.vercel.app/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/terms',
                element:<Terms></Terms>,
            }
        ]
    },
])