"use client";
import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaLaptopCode,
  FaFileUpload,
  FaTrophy,
} from "react-icons/fa";

export default function Timeline() {
  const events = [
    {
      title: "Fri Dec 19 (Afternoon)",
      date: "Opening & Team Formation",
      details:
        "Opening session, Context briefing, Team formation, Problem framing, Mentor validation.",
      icon: <FaRegCalendarAlt size={20} className="text-neutral-dark" />,
      align: "right",
    },
    {
      title: "Saturday Dec 20",
      date: "Design & Build",
      details:
        "Morning: Understanding & Validation. Afternoon/Evening: Build mode & Mentor support.",
      icon: <FaLaptopCode size={20} className="text-neutral-dark" />,
      align: "left",
    },
    {
      title: "Sunday Dec 21",
      date: "Showcase & Closing",
      details:
        "Morning: Testing. Afternoon: Stakeholder Walkthrough & Closing. 12pm Mon: Top ideas announcement.",
      icon: <FaTrophy size={20} className="text-neutral-dark" />,
      align: "right",
    },
  ];

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Event <span className="text-primary-yellow">Timeline</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-orange to-primary-yellow h-full hidden md:block rounded-full"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center md:justify-between flex-col md:flex-row gap-4 md:gap-0"
              >
                {/* Left Content */}
                <div className="md:w-5/12 md:text-right md:pr-12 w-full text-center">
                  {event.align === "right" && (
                    <div>
                      <h3
                        className="text-2xl font-semibold mb-2 text-primary-yellow"
                        style={{ fontFamily: "var(--font-title)" }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-neutral-light/80 text-lg font-bold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {event.date}
                      </p>
                      <p className="text-neutral-light/60 text-sm mt-2">
                        {event.details}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Icon/Marker */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-yellow flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,213,70,0.5)]">
                    {/* Square marker (no rounded corners) */}
                    {event.icon}
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-5/12 md:pl-12 w-full text-center md:text-left">
                  {event.align === "left" && (
                    <div>
                      <h3
                        className="text-2xl font-semibold mb-2 text-primary-yellow"
                        style={{ fontFamily: "var(--font-title)" }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-neutral-light/80 text-lg font-bold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {event.date}
                      </p>
                      <p className="text-neutral-light/60 text-sm mt-2">
                        {event.details}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
