import * as React from "react";


import "./index.css";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import AuthProvider from "./Provider/AuthProvider";
import Mainlayout from "./Pages/MainLayout/Mainlayout";
import Erorr from "./Pages/Erorr/Erorr";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Register/Register";
import Trainer from "./Pages/Trainer/Trainer";
import PrivetsRoutes from "./Routers/PrivetsRoutes";
import Gallary from "./Pages/Gallary/Gallary";
import Dashboard from "./Dashboard/Dashboard";
import Allsubscribers from "./Dashboard/Allsubscribers/Allsubscribers";
import AllTrainer from "./Dashboard/AllTrianer/AllTrainer";
import Chart from "./Dashboard/Chart/Chart";
import AllUsers from "./Dashboard/AllUsers/AllUsers";
import Blog from "./Pages/Blog/Blog";



// import PrivetsRoutes from "./Routers/PrivetsRoutes";

// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Erorr></Erorr>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/training",
        element: <PrivetsRoutes > <Trainer></Trainer> </PrivetsRoutes>,
      },
      {
        path: "/gallary",
        element: <PrivetsRoutes><Gallary></Gallary></PrivetsRoutes>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      }


      // {
      //   path: "/jobDetails/:id",
      //   element: <PrivetsRoutes><JobDetails></JobDetails></PrivetsRoutes>,
      //   loader: ({ params }) => fetch(`https://job-portal-delta-bay.vercel.app/course/${params.id}`)
      // },


      // {
      //   path: "/mycart",
      //   loader: () => fetch(`https://brand-backend-eight.vercel.app/mycart`),
      //   element:<PrivetsRoutes><Mycart></Mycart></PrivetsRoutes>
      // },

    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashboard",
        element:<Chart></Chart>
    },
      {
        path: "allsubscribers",
        element:<Allsubscribers></Allsubscribers>
      },
      {
        path: "alltrainer",
        element:<AllTrainer></AllTrainer>
      },
      {
        path: "allusers",
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider >
      </AuthProvider>
    </React.StrictMode>
  
);
