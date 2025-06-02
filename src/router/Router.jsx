import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import signIn from "../pages/signin/signIn";

const router = createBrowserRouter([
    {
        path: "/",
       Component:RootLayout,
        children:[
            {
                index: true,
                Component:Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/signIn',
                Component:signIn
            }
        ]
    },
]);



export default router;