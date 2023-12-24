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
import UpdateFood from "../pages/ManageFood/UpdateFood";
import SingleManageFood from "../pages/ManageFood/SingleManageFood";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/detailsFood/:id",
        element: <DetailsFood></DetailsFood>,
        loader: ({ params }) =>
          fetch(
            `https://community-food-server-snowy.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://community-food-server-snowy.vercel.app/createFood/${params.id}`
          ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodManage/:id",
        element: (
          <PrivateRoute>
            <SingleManageFood></SingleManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default routes;
