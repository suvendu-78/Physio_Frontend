import { useState, useRef } from "react";
import Logo from "./logo.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();

  const [role, setRole] = useState("Patient");
  const [info, setInfo] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;

    // Password validation rules
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 number, and 1 special character.",
      );
      return;
    }

    setPasswordError(""); // Clear error if valid

    const data = {
      FName: firstNameRef.current.value,
      LName: lastNameRef.current.value,
      Role: role,
      Email: emailRef.current.value,
      Password: passwordRef.current.value,
      Mobile: phoneRef.current.value,
      Address: addressRef.current.value,
    };
    setInfo(data);
    const Response = await fetch("http://localhost:8000/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (Response.ok) {
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      phoneRef.current.value = "";
      addressRef.current.value = "";

      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "Your account has been created successfully.",
        confirmButtonText: "Continue",
        confirmButtonColor: "#4f46e5",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#2c696e] px-8 py-6 text-center text-white">
          <div className="flex justify-center mb-3">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-xs text-teal-100 mt-1">
            Join PhysioNet to book and manage healthcare services
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              required
              ref={firstNameRef}
              placeholder="John"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Registering as:
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700">
                <input
                  type="radio"
                  name="userType"
                  value="Patient"
                  checked={role === "Patient"}
                  onChange={() => setRole("Patient")}
                  className="w-4 h-4 text-[#2c696e] border-gray-300 focus:ring-[#2c696e] accent-[#2c696e]"
                />
                <span>Patient</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700">
                <input
                  type="radio"
                  name="userType"
                  value="Patient Relative"
                  checked={role === "Patient Relative"}
                  onChange={() => setRole("Patient Relative")}
                  className="w-4 h-4 text-[#2c696e] border-gray-300 focus:ring-[#2c696e] accent-[#2c696e]"
                />
                <span>Patient Relative</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              required
              ref={lastNameRef}
              placeholder="Doe"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              ref={emailRef}
              placeholder="chiti@gmail.com"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition bg-blue-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Mobile No
            </label>
            <input
              type="tel"
              required
              ref={phoneRef}
              placeholder="+91 9876543210"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              required
              ref={addressRef}
              placeholder="Street, City, District"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              ref={passwordRef}
              placeholder="••••••••"
              className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#2c696e] transition bg-blue-50/50`}
            />
            {passwordError ? (
              <p className="text-red-500 text-[10px] mt-1 leading-tight">
                {passwordError}
              </p>
            ) : (
              <p className="text-gray-400 text-[10px] mt-1">
                Must be 8+ characters with at least 1 uppercase letter, 1
                number, and 1 special symbol.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-lg transition shadow-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
