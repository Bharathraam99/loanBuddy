import { useState } from "react";
import LoanBuddyLogin from "../../assets/loanBuddyLoginImage.jpg";
import { useDispatch } from "react-redux";
import { signinThunk } from "../../thunks/authThunk";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAge, setUserAge] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountryName, setUserCountryName] = useState("");
  const dispatch = useDispatch();
  const userRole = "USER";
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      userName:userName,
      userFirstName:userFirstName,
      userLastName:userLastName,
      userAge:userAge,
      userPhoneNumber:userPhoneNumber,
      userEmail:userEmail,
      userPassword:userPassword,
      userCountryName:userCountryName,
      userRole:userRole
    };
    try {
      dispatch(
        signinThunk(user)
      );
      alert("SUCCESSFULLY SIGNED IN")
      navigate("/users/login");
    } catch (e) {
      alert("Couldn't sign up", e);
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
          <h2 className="text-2xl font-bold mb-6 text-center">Register Form</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-2">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-600"
              >
                Username:
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userFirstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name:
              </label>
              <input
                type="text"
                id="userFirstName"
                name="userFirstName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserFirstName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userLastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserLastName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userAge"
                className="block text-sm font-medium text-gray-600"
              >
                Age:
              </label>
              <input
                type="number"
                id="userAge"
                name="userAge"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserAge(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Password:
              </label>
              <input
                type="password"
                id="userPassword"
                name="userPassword"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="userCountryName"
                className="block text-sm font-medium text-gray-600"
              >
                Country:
              </label>
              <input
                type="text"
                id="userCountryName"
                name="userCountryName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserCountryName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="userPhoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="userPhoneNumber"
                name="userPhoneNumber"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setUserPhoneNumber(e.target.value)}
              />
            </div>

            <button
              type="submit"
              value="Register"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
