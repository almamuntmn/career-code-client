import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Sign from "../pages/Sign/Sign";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouts from "../routes/PrivateRouts";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "sign",
        Component: Sign
      },
      {
        path: "jobs/:id",
        Component: JobDetails,
        loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: 'apply/:id',
        element: <PrivateRouts><JobApply></JobApply></PrivateRouts>
      },
      {
        path: 'myApplications',
        element: <PrivateRouts><MyApplications></MyApplications></PrivateRouts>
      }
    ],
  },
]);


export default router;