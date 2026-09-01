import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  FileText,
  User,
  CreditCard,
  Heart,
  Plus,
  Upload,
  Activity,
  CheckCircle2,
  ChevronRight,
  LogOut,
} from "lucide-react";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  const Data = async () => {
    try {
      const Response = await fetch(
        "http://localhost:8000/api/v1/user/getuser",
        {
          method: "GET",
          credentials: "include",
        },
      );

      const data1 = await Response.json();

      console.log("RESPONSE:", data1);

      if (data1.success) {
        setInfo(data1.data);
      }
    } catch (error) {
      console.log("GET USER ERROR:", error);
    }
  };

  useEffect(() => {
    Data();
    return () => {};
  }, []);

  console.log(info);

  const handleLogout = async () => {
    try {
      const Response = await fetch("http://localhost:8000/api/v1/user/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await Response.json();

      console.log("LOGOUT RESPONSE:", data);

      if (Response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log("LOGOUT ERROR:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* TOP USER BANNER */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-2xl font-bold border-2 border-amber-400">
              {info.FName ? info.FName.charAt(0).toUpperCase() : ""}
            </div>

            <div>
              <h1 className="text-2xl font-bold">Welcome back,{info.FName}</h1>

              <p className="text-xs text-teal-200">{info.Address}</p>

              <p>
                Mob:{info.Mobile},Email:{info.Email}
              </p>
            </div>
          </div>

          {/* BOOK + LOGOUT BUTTONS */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/services"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-lg shadow transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Book New Session
            </NavLink>

            <button
              onClick={handleLogout}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* MAIN DASHBOARD CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* SIDEBAR NAVIGATION */}
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === "appointments"
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Calendar className="w-4 h-4" />
              {info.Role}
            </button>

            <button
              onClick={() => setActiveTab("reports")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === "reports"
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <FileText className="w-4 h-4" /> Medical Reports
            </button>

            <button
              onClick={() => setActiveTab("family")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === "family"
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <User className="w-4 h-4" /> Family Members
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === "saved"
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Heart className="w-4 h-4" /> Saved Therapists
            </button>
          </div>
        </div>

        {/* DASHBOARD BODY */}
        <div className="lg:col-span-3 space-y-6">
          {/* STATS OVERVIEW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-teal-100 text-teal-800 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Upcoming Visits
                  </p>

                  <p className="text-xl font-bold text-slate-900">
                    1 Scheduled
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-100 text-amber-800 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Completed Sessions
                  </p>

                  <p className="text-xl font-bold text-slate-900">4 Visits</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-100 text-blue-800 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Uploaded Records
                  </p>

                  <p className="text-xl font-bold text-slate-900">3 Reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB CONTENT: APPOINTMENTS */}
          {activeTab === "appointments" && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-bold text-slate-900">
                Upcoming Booking
              </h2>

              {/* Active Appointment Card */}
              <div className="border border-teal-200 bg-teal-50/50 rounded-xl p-5 flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-teal-200 text-teal-800 rounded-full">
                    Home Visit Confirmed
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mt-2">
                    Dr. Rajesh Samal (PT)
                  </h3>

                  <p className="text-xs text-slate-600">
                    Orthopedic Specialist • Home Rehab
                  </p>

                  <p className="text-xs font-medium text-slate-800 pt-2">
                    📅 Aug 26, 2026 | ⏰ 10:00 AM - 11:00 AM
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-teal-700 text-white font-medium text-xs rounded-lg hover:bg-teal-800 transition">
                    View Live Status
                  </button>

                  <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 font-medium text-xs rounded-lg hover:bg-slate-50 transition">
                    Reschedule
                  </button>
                </div>
              </div>

              {/* Past History */}
              <h3 className="text-md font-bold text-slate-900 pt-4 border-t border-slate-100">
                Past Appointment History
              </h3>

              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-slate-800">
                      Dr. Sunita Mohanty
                    </p>

                    <p className="text-slate-500">
                      Clinic Visit • Aug 10, 2026
                    </p>
                  </div>

                  <span className="text-emerald-700 font-medium bg-emerald-100 px-2.5 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: MEDICAL REPORTS */}
          {activeTab === "reports" && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900">
                  Your Medical Documents
                </h2>

                <button className="px-3 py-1.5 bg-teal-700 text-white text-xs font-medium rounded-lg flex items-center gap-2">
                  <Upload className="w-3.5 h-3.5" /> Upload File
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-teal-700" />

                    <div>
                      <p className="font-bold text-slate-800">
                        Knee_MRI_Scan.pdf
                      </p>

                      <p className="text-slate-500">Uploaded on Aug 12, 2026</p>
                    </div>
                  </div>

                  <button className="text-teal-700 hover:underline">
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: FAMILY MEMBERS */}
          {activeTab === "family" && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900">
                Family Members
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Manage your family members here.
              </p>
            </div>
          )}

          {/* TAB CONTENT: SAVED THERAPISTS */}
          {activeTab === "saved" && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900">
                Saved Therapists
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Your saved therapists will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
