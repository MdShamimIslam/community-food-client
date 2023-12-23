import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import ManageFood from "../pages/ManageFood/ManageFood";
import FoodRequest from "../pages/FoodRequest/FoodRequest";
import DetailsFood from "../pages/DetailsFood/DetailsFood";

const routes = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/availableFoods',
                element:<AvailableFood></AvailableFood>
            },
            {
                path:'/detailsFood/:id',
                element:<DetailsFood></DetailsFood>,
                loader:({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path:'/addFood',
                element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path:'/manageFood',
                element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>
            },
            {
                path:'/foodRequest',
                element:<PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default routes;