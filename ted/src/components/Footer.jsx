import React from "react";
import tedLogo from "../assets/logo-light.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  function subscribeButton() {
    if (email === "") {
      setErrorMessage("Please enter your email");
    } else if (!email.includes("@")) {
      setErrorMessage("Input a valid email");
      setConfirmationMessage("");
    } else if (email.includes("@")) {
      setConfirmationMessage(
        "Thank you for subscribing, We'll get in touch soon",
      );
      setEmail("");
      setErrorMessage("");
    }
  }

  return (
    <footer className="bg-linear-to-b from-black/80 to-gray-900 w-full px-5 py-8 text-white sm:px-6 lg:px-10">
      {/* ------------------------------------------------------------ */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <img src={tedLogo} alt="" className="w-40 sm:w-48 md:w-52" />
          <p className="mt-6 text-white/90">Ideas Worth Spreading</p>
          <p className="mt-6 text-white/70">
            TEDxUniversityofCapeCoast is an independently organized TED event at
            the University of Cape Coast, bringing together thinkers and doers
            to share ideas that inspire change.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-lg text-white/90">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 transition hover:bg-white/16"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 transition hover:bg-white/16"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="X"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 transition hover:bg-white/16"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 transition hover:bg-white/16"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <ul className="mt-2 space-y-3 text-sm text-white/60">
            <p className="font-bold text-white">Explore</p>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Talks</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul className="mt-2 space-y-3 text-sm text-white/60">
            <p className="font-bold text-white">Connect</p>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Apply to Speak</a>
            </li>
            <li>
              <a href="#">Apply to Perform</a>
            </li>
          </ul>
          <ul className="mt-2 space-y-3 text-sm text-white/60">
            <p className="font-bold text-white">Legal</p>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-xl font-bold text-white md:text-2xl">
            Stay Updated
          </h1>
          <p className="mt-2 text-sm text-white/60 md:text-base">
            Subscribe to our newsletter for the event announcements and
            inspiring content
          </p>
        </div>

        {/* input */}

        <div className="flex w-full max-w-md flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-white/40 rounded-full bg-black/5"
            placeholder="Enter your email"
          />

          <button
            onClick={() => subscribeButton()}
            className="w-full px-4 py-3 rounded-full text-white font-semibold bg-red-600 cursor-pointer hover:bg-red-700 transition-all duration-300"
          >
            Subscribe
          </button>
          <p className="text-center text-red-600 font-bold">{errorMessage}</p>
          <p className="text-center text-green-500 font-bold">
            {confirmationMessage}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
