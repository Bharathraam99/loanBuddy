import React from "react";
import { Link } from "react-router-dom";

const CentralNavBar = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex items-center">
        <nav className="flex space-x-10">
          <Link to="bankTransfer">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Bank Transfer
            </a>
          </Link>
          <Link to="loanRequest">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Request Loan
            </a>
          </Link>
          <Link to="approvedLoanRequest">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Approved Loans
            </a>
          </Link>
          <Link to="viewLoanRequests">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              View Assigned Loan Requests
            </a>
          </Link>
          <Link to="approveLoan">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Approve Loan
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default CentralNavBar;
