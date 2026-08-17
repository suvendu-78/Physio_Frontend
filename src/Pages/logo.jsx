import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <NavLink to="/" className="flex items-center space-x-3">
        <div className="w-15 h-15 rounded-full overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center bg-white">
          <img
            src="/logo.jpeg"
            alt="LiBi Motion Care Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </NavLink>
    </>
  );
};
export default Logo;
