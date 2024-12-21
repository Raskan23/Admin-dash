import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-secondary to-primary ">
      <div className="bg-[#F1E7FF] bg-opacity-100 rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-primary text-center">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Login to access your dashboard
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-primary hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-black py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>

        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="./signup"
            className="text-primary hover:underline focus:outline-none"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
