import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
