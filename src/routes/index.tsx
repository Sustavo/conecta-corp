import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/home-page/HomePage";
import { FormPage } from "../Pages/form-page/FormPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/form",
        element: <FormPage />,
    }
]);