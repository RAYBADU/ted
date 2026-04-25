import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { LuCalendarDays, LuMail, LuSparkles } from "react-icons/lu";

const TicketModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-modal="true"
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-8 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-red-100 bg-stone-50 shadow-[0_35px_120px_rgba(15,23,42,0.25)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.24),transparent_65%)]" />
            <div className="absolute -left-12 top-16 h-32 w-32 rounded-full bg-red-100/70 blur-3xl" />
            <div className="absolute -right-10 bottom-12 h-36 w-36 rounded-full bg-amber-100/80 blur-3xl" />

            <button
              type="button"
              aria-label="Close modal"
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-red-100 bg-white/90 text-2xl text-slate-700 transition-colors duration-300 hover:bg-red-50 cursor-pointer"
              onClick={onClose}
            >
              <IoMdClose />
            </button>

            <div className="relative px-6 pb-7 pt-16 sm:px-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white shadow-lg shadow-red-200">
                <LuSparkles />
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-red-600 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  TEDxUCC 2026
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Early bird tickets are sold out
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  The first release has been fully claimed. More experiences may
                  open soon, and we would love to keep you in the loop.
                </p>
              </div>

              <div className="mt-8 grid gap-3 rounded-[1.75rem] border border-white/70 bg-white/80 p-4 shadow-sm sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-stone-50 p-4 text-left">
                  <LuCalendarDays className="text-xl text-red-600" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Event Date
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    7 May 2026, 8:00AM at SMS Auditorium, UCC
                  </p>
                </div>

              
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
               
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-red-600 px-6 py-4 text-sm font-semibold transition-colors duration-300 cursor-pointer text-white"
                  onClick={onClose}
                >
                  Keep exploring
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;
