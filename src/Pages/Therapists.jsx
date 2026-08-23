// const Therapists = () => {
//   return (
//     <>
//       <h1>Therapists</h1>
//     </>
//   );
// };
// export default Therapists;

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  TrendingUp,
  Users,
  FileText,
  UserCheck,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Building2,
  Stethoscope,
} from "lucide-react";

const Therapists = () => {
  // useRef hooks for smooth scrolling to key sections
  const howItWorksRef = useRef(null);
  const portalFeaturesRef = useRef(null);
  const registrationRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              Join Odisha's Top Physio Network
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Grow Your Practice with{" "}
              <span className="text-amber-400">LiBi Motion Care</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Connect with verified patients across Odisha for home visits and
              clinic appointments. Streamline your scheduling, manage digital
              prescriptions, and get prompt automated payouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection(registrationRef)}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg shadow-md transition flex items-center justify-center gap-2"
              >
                Join as a Therapist <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection(registrationRef)}
                className="px-6 py-3 border border-slate-400 hover:bg-white/10 text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" /> Register Your Clinic
              </button>
            </div>
          </div>

          {/* Quick Metrics / Portal Card Preview */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-3">
              Why Top Therapists Choose Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl font-extrabold text-amber-400">100%</p>
                <p className="text-xs text-slate-300 mt-1">
                  Verified Patient Leads
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl font-extrabold text-teal-400">Direct</p>
                <p className="text-xs text-slate-300 mt-1">
                  Wallet & UPI Payouts
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl font-extrabold text-teal-400">
                  Flexible
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Custom Working Hours
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-3xl font-extrabold text-amber-400">30+</p>
                <p className="text-xs text-slate-300 mt-1">
                  Districts Covered in Odisha
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollToSection(howItWorksRef)}
              className="text-xs text-teal-300 hover:underline inline-flex items-center gap-1"
            >
              Learn how onboarding works &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Everything You Need to Scale
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Designed specifically for modern physiotherapists and clinic
            managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-lg w-fit mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Manage Schedule
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Set active slots for home visits and clinic appointments
              effortlessly with real-time calendar updates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-lg w-fit mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Track Earnings
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transparent earnings dashboard showing commission deductions,
              pending settlements, and wallet balance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Attract Patients
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Gain visibility across district, city, and specialty searches with
              verified patient ratings and reviews.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-lg w-fit mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              Digital Records
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Access uploaded patient reports, issue digital prescriptions, and
              record rehab progress seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION (Targeted by useRef) */}
      <section
        ref={howItWorksRef}
        className="py-16 bg-slate-100 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Simple 4-step onboarding process to get you started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
              <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center mb-4 text-sm">
                1
              </span>
              <UserCheck className="w-6 h-6 text-teal-700 mb-2" />
              <h3 className="font-bold text-slate-900 mb-1">Registration</h3>
              <p className="text-xs text-slate-600">
                Fill in basic contact details, qualifications, and upload your
                profile photo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
              <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center mb-4 text-sm">
                2
              </span>
              <ShieldCheck className="w-6 h-6 text-teal-700 mb-2" />
              <h3 className="font-bold text-slate-900 mb-1">
                KYC & Verification
              </h3>
              <p className="text-xs text-slate-600">
                Upload degree certificates and council license. Admin completes
                verification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
              <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center mb-4 text-sm">
                3
              </span>
              <Clock className="w-6 h-6 text-teal-700 mb-2" />
              <h3 className="font-bold text-slate-900 mb-1">
                Set Availability
              </h3>
              <p className="text-xs text-slate-600">
                Configure your active hours, consultation fee, and home-visit
                service areas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
              <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center mb-4 text-sm">
                4
              </span>
              <CheckCircle2 className="w-6 h-6 text-teal-700 mb-2" />
              <h3 className="font-bold text-slate-900 mb-1">Accept Bookings</h3>
              <p className="text-xs text-slate-600">
                Receive instant alerts, accept or reject requests, and complete
                treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL PREVIEW & REQUIREMENTS (Targeted by useRef) */}
      <section
        ref={portalFeaturesRef}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Mockup / Highlights */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Therapist Dashboard Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Our intuitive dashboard gives you full control over your
              physiotherapy practice from desktop or mobile.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Home Visit Dispatch System
                  </h4>
                  <p className="text-xs text-slate-600">
                    View patient addresses and navigate directly with live
                    location support.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Clinic Multi-Staff Support
                  </h4>
                  <p className="text-xs text-slate-600">
                    Clinic owners can attach multiple physiotherapists and
                    assign appointments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Automated Settlement Reports
                  </h4>
                  <p className="text-xs text-slate-600">
                    Clear breakdown of total revenue, system commission, and
                    direct payouts.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Onboarding Requirements Checklist */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-amber-400">
              Required Documents for Onboarding
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Keep these documents ready to ensure quick account verification:
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-slate-800 rounded-lg flex items-center gap-3 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  Physiotherapy Degree / Diploma Certificate
                </span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg flex items-center gap-3 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  Council / State Board Registration Number
                </span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg flex items-center gap-3 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  Government Photo ID (Aadhaar / PAN)
                </span>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg flex items-center gap-3 border border-slate-700">
                <CreditCard className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  Bank Account or UPI ID for Earnings Payout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (Targeted by useRef) */}
      <section
        ref={registrationRef}
        className="py-16 bg-teal-800 text-white px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Digitalize Your Practice?
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mb-8">
            Join hundreds of trusted physiotherapists across Odisha and start
            accepting appointments today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to="/signup"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition shadow-md"
            >
              Get Started Now
            </NavLink>
            <NavLink
              to="/login"
              className="px-8 py-3 bg-teal-900 hover:bg-teal-950 text-white border border-teal-700 font-medium rounded-lg transition"
            >
              Already Registered? Login
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Therapists;
