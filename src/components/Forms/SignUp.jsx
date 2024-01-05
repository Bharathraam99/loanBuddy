import LoanBuddyLogin from "../../assets/loanBuddyLoginImage.jpg";
const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 bg-cover">
        <img
          src={LoanBuddyLogin}
          alt="Login Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Column - Login Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
          <form>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>


            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-600"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
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
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
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
