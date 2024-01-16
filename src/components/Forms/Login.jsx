import React, { useState } from "react";
import LoanBuddyLogin from "../../assets/loanBuddyLoginImage.jpg";
import {loginThunk} from "../../thunks/authThunk";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginThunk({ userName, userPassword }));
      navigate("/private/home")
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-cover">
        <img
          src={LoanBuddyLogin}
          alt="Login Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-600"
              >
                User Name:
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            />
              
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
