import { useRef } from "react";

const ForgetPassword = () => {
  const refemail = useRef(null);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const Email = refemail.current.value;
    const data = await fetch(
      "http://localhost:8000/api/v1/user/forgetpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email }),
      },
    );
    console.log(Email);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Login Section */}
      <div className="flex justify-center pt-[108px] px-4">
        <div className="w-full max-w-[515px] bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100">
          {/* Header */}
          <div className="bg-teal-700 h-[202px] flex flex-col items-center justify-center text-white">
            {/* Logo */}
            <div className="w-[70px] h-[70px] rounded-full bg-blue-400 border-2 border-white flex items-center justify-center mb-4 shadow">
              <span className="font-bold text-xl">LiBi</span>
            </div>

            <h2 className="text-[28px] font-bold">Welcome Back</h2>

            <p className="text-[16px] mt-1">
              Log in to manage your bookings and consultations
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handelSubmit}>
            <div className="px-9 py-9">
              <label className="block text-[16px] font-semibold text-slate-800 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                ref={refemail}
                className="w-full h-[57px] px-4 rounded-xl border border-gray-300 bg-blue-50 text-[17px] outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition"
              />

              {/* Login Button */}
              <button className="w-full h-[60px] mt-8 bg-orange-500 hover:bg-orange-600 text-black text-[18px] font-semibold rounded-xl shadow-md transition">
                Reset Password
              </button>
            </div>

            {/* Bottom */}
            <div className="h-[62px] bg-slate-50 border-t border-gray-100 flex items-center justify-center text-[16px] text-gray-600">
              Don't have an account?
              <span className="ml-1 text-teal-700 font-semibold cursor-pointer hover:underline">
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
