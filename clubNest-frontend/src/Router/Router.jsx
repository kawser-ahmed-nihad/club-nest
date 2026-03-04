import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ClubsAdd from "../Pages/Clubs/ClubsAdd/ClubsAdd";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            { path: "add-club", element: <ClubsAdd></ClubsAdd> }


        ],
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },
            { path: "register", Component: Register },
        ],
    },
]);

