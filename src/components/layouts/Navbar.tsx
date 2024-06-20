import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDropdown = () => {
    setMenuOpen(false);
  };
  return (
    <header className="h-24">
      <nav className="w-full h-full px-4 sm:px-20 mx-auto flex justify-between items-center">
        <h1 className="text-[20px] sm:text-[32px] font-bold ">Event <span className="text-[#00D4FC]">360</span></h1>
        <ul className="hidden sm:flex space-x-4">
          <NavLink to="/" onClick={closeDropdown}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeDropdown}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeDropdown}>
            Contact
          </NavLink>
          <NavLink to="/dashboard" onClick={closeDropdown}>
            Dashboard
          </NavLink>
        </ul>
        <div className="sm:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-white p-2 focus:outline-none"
          >
            <AlignJustify className="w-6 h-6" />
          </button>
          <div
            className={`${
              menuOpen ? "" : "hidden"
            } absolute right-0 mt-2 bg-white border rounded-md shadow-md py-2 w-48`}
            style={{ zIndex: 10 }}
          >
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Contact
            </NavLink>
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
