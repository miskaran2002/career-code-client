import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import signIn from "../pages/signin/signIn";
import jobsDetails from "../pages/jobsDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/jobapply/jobApply";
import MyApplications from "../pages/my Application/MyApplications";



const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/jobs/:id',
                Component: jobsDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoutes>
                    <JobApply></JobApply>
                </PrivateRoutes>

            },
            {
                path: '/myApplications',
                element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signIn',
                Component: signIn
            }
        ]
    },
]);



export default router;