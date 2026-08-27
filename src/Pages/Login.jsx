import { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "./logo.jsx";
import Swal from "sweetalert2";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      Email: emailRef.current.value,
      Password: passwordRef.current.value,
    };
    const Response = await fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    setData(info);
    console.log(info);
    if (Response.ok) {
      emailRef.current.value = "";
      passwordRef.current.value = "";

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome to LiBi motion care.",
        confirmButtonText: "Continue",
        confirmButtonColor: "#4f46e5",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#2c696e] px-8 py-6 text-center text-white">
          <div className="flex justify-center mb-3">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-teal-100 text-sm mt-1">
            Log in to manage your bookings and consultations
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {/* Email / Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email or Mobile Number
            </label>
            <input
              type="text"
              required
              ref={emailRef}
              placeholder="Enter your email or phone"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c696e] focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a
                href="#forgot"
                className="text-xs font-semibold text-[#2c696e] hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              ref={passwordRef}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c696e] focus:border-transparent outline-none transition duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-200 transform active:scale-[0.99] mt-2"
          >
            Log In
          </button>
        </form>

        {/* Footer / Signup Link */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <NavLink to="/signup">
              <button
                type="button"
                className="font-semibold text-[#2c696e] hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
