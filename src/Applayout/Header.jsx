import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-[#32838c] font-semibold"
        : "text-gray-800 hover:text-[#32838c]"
    }`;

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="text-[#32838c] border-2 border-[#32838c] px-1.5 py-0.5 rounded flex items-center justify-center font-bold text-lg">
              [
              <span className="text-[#32838c] text-xl font-normal mx-0.5">
                👤
              </span>
              ]
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#32838c] font-semibold text-lg tracking-tight">
                PhysioNet
              </span>
              <span className="text-black font-bold text-sm tracking-wide">
                Odisha
              </span>
            </div>
          </NavLink>
          {/* Desktop Navigation Links & Buttons */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <span className="text-gray-300 font-light">|</span>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <span className="text-gray-300 font-light">|</span>
            <NavLink to="/clinics" className={navLinkClass}>
              Clinics
            </NavLink>
            <span className="text-gray-300 font-light">|</span>
            <NavLink to="/therapists" className={navLinkClass}>
              For Therapists
            </NavLink>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <NavLink
                to="/login"
                className="px-4 py-1.5 border border-[#32838c] text-[#32838c] rounded-md hover:bg-[#32838c] hover:text-white transition-all text-sm font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-1.5 bg-[#32838c] text-white rounded-md hover:bg-[#286a71] transition-all text-sm font-medium shadow-sm"
              >
                Sign Up
              </NavLink>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#32838c] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-1 font-medium ${
                isActive
                  ? "text-[#32838c]"
                  : "text-gray-800 hover:text-[#32838c]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-1 font-medium ${
                isActive
                  ? "text-[#32838c]"
                  : "text-gray-800 hover:text-[#32838c]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/clinics"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-1 font-medium ${
                isActive
                  ? "text-[#32838c]"
                  : "text-gray-800 hover:text-[#32838c]"
              }`
            }
          >
            Clinics
          </NavLink>
          <NavLink
            to="/therapists"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-1 font-medium ${
                isActive
                  ? "text-[#32838c]"
                  : "text-gray-800 hover:text-[#32838c]"
              }`
            }
          >
            For Therapists
          </NavLink>
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 border border-[#32838c] text-[#32838c] rounded-md font-medium text-sm"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 bg-[#32838c] text-white rounded-md font-medium text-sm"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Head;
