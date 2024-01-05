import RouteErrorPage from "../individualPages/routeErrorPage";
import LandingPage from "../individualPages/LandingPage";
import WhatLanding from "../individualPages/WhatLanding";
import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Forms/Login";
import SignUp from "../components/Forms/SignUp";

export const routesForPublic = [
  {
    path: "/",
    element: <NavBar />,
    errorElement: <RouteErrorPage></RouteErrorPage>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "what",
        element: <WhatLanding />,
      },
      {
        path: "why",
        element: <WhatLanding />,
      },
      {
        path: "how",
        element: <WhatLanding />,
      },
    ],
  },
  {
    path: "/users/login",
    element: <Login />,
    errorElement: <RouteErrorPage></RouteErrorPage>,
  },
  {
    path: "/users/signup",
    element: <SignUp />,
    errorElement: <RouteErrorPage></RouteErrorPage>,
  },
];

