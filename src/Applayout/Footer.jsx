import React from "react";
import { NavLink } from "react-router-dom";

const Foot = () => {
  const navLinkStyle = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-amber-400 font-medium" : "hover:text-amber-400"
    }`;

  return (
    <footer className="bg-[#2c696e] text-white border-t border-teal-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-4">
          <NavLink to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-[#2c696e] font-bold text-lg">
              P
            </div>
            <span className="text-2xl font-bold tracking-wide text-white">
              PhysioNet
            </span>
          </NavLink>
          <p className="text-teal-100 text-sm max-w-sm leading-relaxed">
            Connecting patients with top certified physiotherapists across
            Odisha for home visits and clinic appointments.
          </p>
          <div className="pt-2 text-xs text-teal-200">
            <p>
              📍 Serving Bhubaneswar, Cuttack, Puri & major districts across
              Odisha.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-teal-100">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyle}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/physiotherapists" className={navLinkStyle}>
                Find Physiotherapists
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkStyle}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Care Services */}
        <div>
          <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-teal-100">
            <li>
              <NavLink to="/book-home-visit" className={navLinkStyle}>
                Book Home Visit
              </NavLink>
            </li>
            <li>
              <NavLink to="/book-clinic-visit" className={navLinkStyle}>
                Book Clinic Visit
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/orthopedic-rehab" className={navLinkStyle}>
                Orthopedic Rehab
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/neurological-rehab"
                className={navLinkStyle}
              >
                Neurological Rehab
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/sports-physio" className={navLinkStyle}>
                Sports Physiotherapy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Support
          </h3>
          <ul className="space-y-2.5 text-sm text-teal-100">
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a
                href="tel:+919876543210"
                className="hover:text-amber-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:support@physionet.in"
                className="hover:text-amber-400 transition-colors"
              >
                support@physionet.in
              </a>
            </li>
            <li>
              <NavLink to="/help" className={navLinkStyle}>
                Help Center & FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className={navLinkStyle}>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className={navLinkStyle}>
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-800/80 bg-[#235458] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-teal-200 gap-3">
          <p>© {new Date().getFullYear()} PhysioNet. All rights reserved.</p>
          <div className="flex gap-4">
            <NavLink to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </NavLink>
            <span>•</span>
            <NavLink to="/terms" className="hover:underline">
              Terms of Use
            </NavLink>
            <span>•</span>
            <NavLink to="/sitemap" className="hover:underline">
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
