import React, { useState } from "react";
import TedxLogo from "../assets/logo-dark.png";
import { Link, useLocation } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Event", to: "/event" },
  { label: "Speakers", to: "/speakers" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md md:px-12 lg:px-20">
        <img src={TedxLogo} alt="Logo" className="w-32 md:w-40" />

        <div className="hidden gap-6 font-semibold text-slate-800 md:flex text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={`transition-colors duration-300 hover:text-red-600 ${
                pathname === link.to ? "text-red-600" : ""
              }`}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full bg-red-600 px-4 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-red-700 md:px-5 md:text-sm cursor-pointer">
            Get Tickets
          </button>

          <button
            type="button"
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center cursor-pointer  text-3xl text-slate-900 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <HiBars2 />
          </button>
        </div>
      </nav>


{/* mobile navigation */}

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/35 md:hidden" onClick={closeMenu}>
          <div
            className="absolute inset-x-4 top-4 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                
                <div>
                  <img src={TedxLogo} alt="" className="w-50" />
                </div>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full bg-red-50 text-3xl  cursor-pointer"
                onClick={closeMenu}
              >
                <IoMdClose />
              </button>
            </div>

            <div className="mt-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`block rounded-2xl px-4 py-4 text-lg font-semibold transition-colors duration-300 ${
                    pathname === link.to
                      ? "bg-red-600 text-white"
                      : "bg-slate-50 hover:bg-red-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
