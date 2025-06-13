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
import AddJob from "../pages/Addjob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";



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
                path:'/addJob',
                element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>

            },
            {
                path: '/myPostedJobs',
                element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>

            },
            {
                path:'applications/:job_id',
                element:<PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)

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