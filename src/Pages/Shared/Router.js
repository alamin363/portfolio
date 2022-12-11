import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../About/About";
import Login from "../Accounts/Login";
import Admin from "../Admin/Admin";
import Timeline from "../Admin/Timeline";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Project from "../Project/Project";

export const router = createBrowserRouter([
  {path:"/", element: <Main />, children: [
    {path:'/', element: <Home />},
    {path:'/about', element: <About />},
    {path:'/project', element: <Project />},
    {path:'/contact', element: <Contact />},
    {path:'/account', element: <Login />},
    {path:'/admin', element: <Admin />},
    {path:'/admin/timeline', element: <Timeline />},
  ]}
]);
