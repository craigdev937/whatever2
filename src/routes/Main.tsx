import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../page/Home";
import { Cart } from "../page/Cart";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



