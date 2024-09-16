import { useRoutes } from "react-router-dom";
import Suspense from "../utils";
import { lazy } from "react";
const Home = lazy(() => import("../routes/home/Home"));
const Private = lazy(() => import("../routes/private/Private"));
const Profile = lazy(() => import("./profiles/Profiles"));
const Auth = lazy(() => import("../routes/auth/Auth"));
const Login = lazy(() => import("../routes/auth/login/Login"));
const SignUp = lazy(() => import("./auth/signup/Signup"));
const NotFound = lazy(() => import("../routes/not-found/NotFound"));


const RouteController = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense>
          <Private />
        </Suspense>
      ),
      children: [
        {
          path: "/profile/",
          element: (
            <Suspense>
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "/auth/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/auth/signup",
          element: (
            <Suspense>
              <SignUp />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
    },
  ]);
};

export default RouteController;
