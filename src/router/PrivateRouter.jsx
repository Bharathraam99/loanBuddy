import React from "react";
import TestComp from "../components/TestComp";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import HomePage from "../individualPages/HomePage";

export const routesForAuthenticatedOnly = [
  {
    path: "/private",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "home",
        element: <HomePage/>,
      },
      {
        path: "loan",
        element: <div>User Loan Request Page</div>,
      },
    ],
  },
];
