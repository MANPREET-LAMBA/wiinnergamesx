import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import Pageservice from "./servicepage/Pageservice";
import Layput from "./Layout";
import Investment from "./servicepage/Investment";
import Blog from "./blog/Blog";
import Adminlogin from "./blogadmin/Adminlogin";
import BlogForm from "./blog/Blogform";
import ProtectedRoute from "./blogadmin/ProtectedRoute";
import Trading from "./servicepage/Trading";
import Education from "./servicepage/Education";
import Singleblog from "./blog/Singleblog";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layput />,
            children: [
                {
                    path: "/",
                    element: <App />
                },

                {
                    path: "services",
                    element: <Pageservice />,
                    children: [
                        {
                            path: "investment",
                            element: <Investment />,
                        },
                        {
                            path: "trading",
                            element: <Trading />,
                        },
                        {
                            path: "education",
                            element: <Education />,
                        }
                    ],
                },
                {
                    path: "blogs",
                    element: <Blog />,


                },
                {
                    path: "blog/:id", // ✅ dynamic route for single blog
                    element: <Singleblog />,
                },

            ]
        },
        {
            path: "/login",
            element: <Adminlogin />
        },
        {
            path: "/admin",
            element: (
                < ProtectedRoute >
                    <BlogForm />
                </ProtectedRoute >
            )
        },

    ]
);

export default function Pagerouter() {
    return (

        <RouterProvider router={router}></RouterProvider>
    )
}