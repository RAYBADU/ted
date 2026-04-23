import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { LuBellRing } from "react-icons/lu";

const Event = () => {
  return (
    <section className="overflow-x-hidden bg-stone-100 pt-18 text-slate-900">
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex min-h-72 flex-col justify-center bg-linear-to-l from-black/80 to-gray-900 px-6 py-12 text-center md:min-h-88"
      >
        <p className="text-sm font-semibold tracking-[0.25em] text-red-500">
          EVENTS
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Nothing on the calendar just yet
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
          We are shaping the next TEDxUniversityofCapeCoast experience with the
          same intention, energy, and detail that define the rest of the
          journey.
        </p>
      </motion.header>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 md:px-8 lg:flex-row lg:items-stretch lg:py-16">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative flex-1 overflow-hidden rounded-4xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-100 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />

          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white shadow-lg shadow-red-200">
              <FaRegCalendarXmark />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              No upcoming events
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              There are currently no upcoming events to announce. When the next
              gathering is ready, you will see it here first with all the
              details, speakers, and ticket information.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              Stay tuned for the next reveal
            </div>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex w-full flex-col justify-between rounded-4xl bg-red-600 p-8 text-white lg:max-w-sm"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
              <LuBellRing />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">In the meantime</h3>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Keep an eye on this page for future announcements. The next event
              will arrive in the same bold spirit and visual world as the rest
              of the TEDx experience.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-white/20 bg-black/15 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              Kintsugi energy
            </p>
            <p className="mt-3 text-sm leading-7 text-white/80">
              Quiet seasons still matter. We are using this space to prepare
              something thoughtful, polished, and worth showing up for.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Event;
