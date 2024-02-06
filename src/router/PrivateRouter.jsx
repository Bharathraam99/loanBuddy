import React from "react";
import TestComp from "../components/TestComp";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import BankTransfer from "../individualPages/BankTransfer";
import CentralNavBar from "../components/CentralNavBar/CentralNavBar";

export const routesForAuthenticatedOnly = [
  {
    path: "/private",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "bankTransfer",
        element: <BankTransfer />,
      },
      {
        path: "loanRequest",
        element: <div>User Loan Request Page</div>,
      },
      {
        path: "approveLoan",
        element: <div>Approve Loan Request Page</div>,
      },
      {
        path: "viewLoanRequests",
        element: <div>View Loan Request Page</div>,
      },
      {
        path: "approvedLoanRequest",
        element: <div>View Approved Loan Request Page</div>,
      },
    ],
  },
];
