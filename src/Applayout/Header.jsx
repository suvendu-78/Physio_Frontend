// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Head = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Set default to false so Login & Sign Up show first
//   // Check localStorage if token exists (e.g., localStorage.getItem("token") !== null)
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navLinkClass = ({ isActive }) =>
//     `transition-colors ${
//       isActive
//         ? "text-[#32838c] font-semibold"
//         : "text-gray-800 hover:text-[#32838c]"
//     }`;

//   return (
//     <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <NavLink to="/" className="flex items-center space-x-3">
//             <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center bg-white">
//               <img
//                 src="/logo.jpeg"
//                 alt="LiBi Motion Care Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="font-semibold text-[#32838c] text-xl">
//               LiBi Motion Care
//             </span>
//           </NavLink>

//           {/* Desktop Navigation Links & Buttons */}
//           <div className="hidden md:flex items-center space-x-6 text-xl font-medium">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>
//             <span className="text-gray-300 font-light">|</span>
//             <NavLink to="/services" className={navLinkClass}>
//               Services
//             </NavLink>
//             <span className="text-gray-300 font-light">|</span>
//             <NavLink to="/clinics" className={navLinkClass}>
//               Clinics
//             </NavLink>
//             <span className="text-gray-300 font-light">|</span>
//             <NavLink to="/therapists" className={navLinkClass}>
//               For Therapists
//             </NavLink>

//             {/* Action Buttons OR Dashboard Button */}
//             <div className="flex items-center space-x-3 ml-4 relative">
//               {isLoggedIn ? (
//                 /* SHOW DASHBOARD ONLY AFTER LOGIN */
//                 <div className="relative">
//                   <button
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     className="flex items-center space-x-2 px-4 py-1.5 bg-[#32838c] text-white rounded-md hover:bg-[#286a71] transition-all text-sm font-medium shadow-sm"
//                   >
//                     <span>👤 Dashboard</span>
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {/* Profile Dropdown Menu */}
//                   {dropdownOpen && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50 text-sm font-normal">
//                       <NavLink
//                         to="/patient/dashboard"
//                         onClick={() => setDropdownOpen(false)}
//                         className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#32838c]"
//                       >
//                         My Dashboard
//                       </NavLink>
//                       <NavLink
//                         to="/patient/profile"
//                         onClick={() => setDropdownOpen(false)}
//                         className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#32838c]"
//                       >
//                         Medical Reports
//                       </NavLink>
//                       <hr className="my-1 border-gray-100" />
//                       <button
//                         onClick={() => {
//                           setIsLoggedIn(false); // Simulate Logout
//                           setDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 /* SHOW LOGIN & SIGN UP BY DEFAULT */
//                 <>
//                   <NavLink
//                     to="/login"
//                     className="px-4 py-1.5 border border-[#32838c] text-[#32838c] rounded-md hover:bg-[#32838c] hover:text-white transition-all text-sm font-medium"
//                   >
//                     Login
//                   </NavLink>
//                   <NavLink
//                     to="/signup"
//                     className="px-4 py-1.5 bg-[#32838c] text-white rounded-md hover:bg-[#286a71] transition-all text-sm font-medium shadow-sm"
//                   >
//                     Sign Up
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Mobile Toggle Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-[#32838c] focus:outline-none p-2"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-3">
//           <NavLink
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 font-medium ${
//                 isActive
//                   ? "text-[#32838c]"
//                   : "text-gray-800 hover:text-[#32838c]"
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/services"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 font-medium ${
//                 isActive
//                   ? "text-[#32838c]"
//                   : "text-gray-800 hover:text-[#32838c]"
//               }`
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/clinics"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 font-medium ${
//                 isActive
//                   ? "text-[#32838c]"
//                   : "text-gray-800 hover:text-[#32838c]"
//               }`
//             }
//           >
//             Clinics
//           </NavLink>
//           <NavLink
//             to="/therapists"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 font-medium ${
//                 isActive
//                   ? "text-[#32838c]"
//                   : "text-gray-800 hover:text-[#32838c]"
//               }`
//             }
//           >
//             For Therapists
//           </NavLink>

//           {/* Mobile Auth/Dashboard Buttons */}
//           <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
//             {isLoggedIn ? (
//               <>
//                 <NavLink
//                   to="/patient/dashboard"
//                   onClick={() => setIsOpen(false)}
//                   className="w-full text-center py-2 bg-[#32838c] text-white rounded-md font-medium text-sm"
//                 >
//                   👤 Patient Dashboard
//                 </NavLink>
//                 <button
//                   onClick={() => {
//                     setIsLoggedIn(false);
//                     setIsOpen(false);
//                   }}
//                   className="w-full text-center py-2 text-red-600 font-medium text-sm border border-red-200 rounded-md"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   onClick={() => setIsOpen(false)}
//                   className="w-full text-center py-2 border border-[#32838c] text-[#32838c] rounded-md font-medium text-sm"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   onClick={() => setIsOpen(false)}
//                   className="w-full text-center py-2 bg-[#32838c] text-white rounded-md font-medium text-sm"
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Head;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Check login state from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token") || localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle User Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    setIsOpen(false);
    navigate("/login");
  };

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
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center bg-white">
              <img
                src="/logo.jpeg"
                alt="LiBi Motion Care Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-[#32838c] text-xl">
              LiBi Motion Care
            </span>
          </NavLink>

          {/* Desktop Navigation Links & Buttons */}
          <div className="hidden md:flex items-center space-x-6 text-xl font-medium">
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

            {/* Dynamic Dashboard / Auth Area */}
            <div className="flex items-center space-x-3 ml-4 relative">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 px-4 py-1.5 bg-[#32838c] text-white rounded-md hover:bg-[#286a71] transition-all text-sm font-medium shadow-sm"
                  >
                    <span>👤 Dashboard</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Profile Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50 text-sm font-normal">
                      <NavLink
                        to="/patient/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#32838c]"
                      >
                        My Dashboard
                      </NavLink>
                      <NavLink
                        to="/patient/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#32838c]"
                      >
                        Medical Reports
                      </NavLink>
                      <hr className="my-1 border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          {/* Mobile Toggle Button */}
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

      {/* Mobile Menu */}
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
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/patient/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 bg-[#32838c] text-white rounded-md font-medium text-sm"
                >
                  👤 Patient Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-center py-2 text-red-600 font-medium text-sm border border-red-200 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Head;
