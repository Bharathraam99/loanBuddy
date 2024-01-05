import React from "react";
import { Button } from "@mui/material";
import LoanBuddyLogo from "../../assets/loanBuddyLogo.png";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white border-b border-gray-300 px-20">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center">
            <Link to={"/"}>
              <a href="#" className="flex-shrink-0">
                <img
                  src={LoanBuddyLogo}
                  height={100}
                  width={100}
                  alt="loanBuddyLogo"
                  className="mr-10 pr-4 border-r border-black"
                />
              </a>{" "}
            </Link>
            <nav className="hidden md:flex space-x-4 mr-auto">
              <Link to={"/what"}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  What are we doing?
                </a>
              </Link>
              <Link to={"/why"}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Why are we doing?
                </a>{" "}
              </Link>

              <Link to={"/how"}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  How are we doing?
                </a>{" "}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => navigate("/users/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className="ml-2"
                onClick={() => navigate("/users/signup")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
