import { createBrowserRouter } from "react-router-dom";
import { FormPage } from "../Pages/FormPage/FormPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <FormPage />,
    }
]);