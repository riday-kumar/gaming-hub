import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import OurGame from "../pages/OurGame";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
        HydrateFallback: Loading,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/our-game",
        loader: () => fetch("/data.json"),
        Component: OurGame,
        HydrateFallback: Loading,
      },
      {
        path: "/game-detail/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        HydrateFallback: Loading,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/auth/profile-update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
