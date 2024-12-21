import React from "react";

const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-secondary to-primary">
      <div className="bg-[#F1E7FF] bg-opacity-100 rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-primary text-center">
          Create Your Account!
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Sign up to get started with your dashboard
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your full name"
              required
            />
          </div>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-black py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="./login"
            className="text-primary hover:underline focus:outline-none"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
