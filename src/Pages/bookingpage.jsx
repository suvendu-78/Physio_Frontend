import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  Phone,
  MessageSquare,
  User,
  MapPin,
  FileText,
  Calendar,
  Clock,
  Home,
  Building2,
} from "lucide-react";

const BookingPage = () => {
  const [data, setData] = useState();
  const refType = useRef();
  const refDate = useRef();
  const refTime = useRef();
  const refFullname = useRef();
  const refNumber = useRef();
  const reAge = useRef();
  const refProblem = useRef();
  const refAddress = useRef();

  const Handling = async (e) => {
    e.preventDefault();
    const info = {
      Type: refType.current.value,
      Date: refDate.current.value,
      Time: refTime.current.value,
      Fullname: refFullname.current.value,
      Number: refNumber.current.value,
      Age: reAge.current.value,
      Problem: refProblem.current.value,
      Address: refAddress.current.value,
    };
    setData(info);
  };

  console.log(data);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      {/* Header / Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#004d40]/10 flex items-center justify-center text-[#004d40]">
              <Activity className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-[#004d40]">
              LiBi Motion Care
            </span>
          </div>

          {/* Quick Contact Header Actions */}
          <div className="flex items-center gap-3">
            <NavLink
              to="tel:+917846967125"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#004d40] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#004d40]" />
              <span>+91 7846967125</span>
            </NavLink>
            <NavLink
              to="https://wa.me/917846967125"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-sm px-3 py-1.5 rounded-full font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Us</span>
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 pt-8">
        {/* Navigation Back Link */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#004d40] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: Booking Form */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Book Consultation
            </h1>
            <p className="text-slate-500 text-sm mb-6">
              Please fill in patient details to confirm your slot for
              <strong className="font-semibold text-slate-700">
                {" "}
                Orthopedic Rehabilitation
              </strong>
              .
            </p>

            <form onSubmit={Handling} className="space-y-5">
              {/* Visit Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Select Visit Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-[#004d40] has-[:checked]:border-[#004d40] has-[:checked]:bg-[#004d40]/5 transition-colors">
                    <input
                      type="radio"
                      name="visitType"
                      value="home"
                      defaultChecked
                      className="accent-[#004d40]"
                      ref={refType}
                    />
                    <Home className="w-4 h-4 text-[#004d40]" />
                    <span className="text-sm font-medium text-slate-800">
                      Home Visit
                    </span>
                  </label>
                  <label className="flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-[#004d40] has-[:checked]:border-[#004d40] has-[:checked]:bg-[#004d40]/5 transition-colors">
                    <input
                      type="radio"
                      name="visitType"
                      value="clinic"
                      className="accent-[#004d40]"
                    />
                    <Building2 className="w-4 h-4 text-[#004d40]" />
                    <span className="text-sm font-medium text-slate-800">
                      Clinic Visit
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors"
                      ref={refDate}
                    />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 bg-white transition-colors appearance-none"
                      defaultValue=""
                      ref={refTime}
                    >
                      <option value="" disabled>
                        Select Time Slot
                      </option>
                      <option value="morning_1">09:00 AM - 11:00 AM</option>
                      <option value="morning_2">11:00 AM - 01:00 PM</option>
                      <option value="afternoon">02:00 PM - 04:00 PM</option>
                      <option value="evening_1">04:00 PM - 06:00 PM</option>
                      <option value="evening_2">06:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Enter patient full name"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors"
                    ref={refFullname}
                  />
                </div>
              </div>

              {/* Age & Phone Number Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 35"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors"
                    ref={reAge}
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Contact Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors"
                      ref={refNumber}
                    />
                  </div>
                </div>
              </div>

              {/* Problem / Reason */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Describe Your Health Problem
                </label>
                <div className="relative">
                  <FileText className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe joint pain, stiffness, fracture recovery details, etc."
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors resize-none"
                    ref={refProblem}
                  ></textarea>
                </div>
              </div>

              {/* Complete Address */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Address
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Enter street address, city, and pincode"
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004d40]/20 focus:border-[#004d40] text-sm text-slate-800 transition-colors resize-none"
                    ref={refAddress}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#004d40] hover:bg-[#00382f] text-white font-bold rounded-xl shadow-md transition-colors text-base mt-2"
              >
                Confirm & Book Appointment
              </button>
            </form>
          </div>

          {/* Right Side: Selected Service Summary */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
                Selected Service
              </span>
              <h2 className="text-xl font-bold text-[#004d40] mb-2">
                Orthopedic Rehabilitation
              </h2>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm text-slate-400 font-semibold">
                  STARTING FROM
                </span>
                <span className="text-2xl font-black text-[#004d40]">₹500</span>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>
                    Avg. Duration: <strong>45–60 mins</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#004d40]" />
                  <span>Home Visit & Clinic Available</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 fill-white" />
                </div>
                <h3 className="font-bold text-emerald-950 text-base">
                  Need Instant Help?
                </h3>
              </div>
              <p className="text-xs text-emerald-800 mb-4 leading-relaxed">
                Have questions before booking? Message our medical
                representative directly on WhatsApp.
              </p>
              <NavLink
                to="https://wa.me/917846967125"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Chat on WhatsApp
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
