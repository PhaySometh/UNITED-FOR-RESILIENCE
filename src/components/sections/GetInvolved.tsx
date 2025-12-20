"use client";
import { motion } from "framer-motion";
import { FaCode, FaHandshake, FaBullhorn } from "react-icons/fa";
import { useState } from "react";

export default function GetInvolved() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const involvementOptions = [
    {
      icon: <FaBullhorn size={32} className="text-neutral-dark" />,
      title: "Submit a Problem",
      description:
        "Submit a problem your community has experienced or an idea that could help. You don't have to participate to share.",
      buttonText: "Coming Soon",
    },
    {
      icon: <FaCode size={32} className="text-neutral-dark" />,
      title: "Hack with Us",
      description:
        "Join us, form a team, and prototype solutions together. Developers, Creatives, Humanitarians welcome.",
      buttonText: "Coming Soon",
    },
    {
      icon: <FaHandshake size={32} className="text-neutral-dark" />,
      title: "Support a Project",
      description:
        "Offer sponsorship, funding, or staff time to develop solutions further through your NGO or company.",
      buttonText: "Coming Soon",
    },
  ];

  return (
    <motion.section
      id="get-involved"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-light text-neutral-dark"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-title"
        >
          Get{" "}
          <span className="text-primary-orange" style={{}}>
            Involved
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-neutral-dark/80 mb-12 max-w-2xl mx-auto"
        >
          There are many ways to participate and support our mission. Find the
          one that&apos;s right for you.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 container-corner-cut shadow-lg flex flex-col"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-primary-orange to-primary-yellow btn-corner-cut mb-6 self-center">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-title text-neutral-dark">
                {option.title}
              </h3>
              <p className="font-body text-neutral-dark/80 mb-6 flex-grow">
                {option.description}
              </p>
              <div
                className="relative mt-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gradient-to-r from-neutral-dark/20 to-neutral-dark/30 text-neutral-dark/60 font-bold btn-corner-cut shadow-md cursor-not-allowed transition-all duration-300"
                >
                  {option.buttonText}
                </button>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-neutral-dark text-neutral-light text-sm rounded-lg whitespace-nowrap shadow-lg z-10"
                  >
                    Coming Soon!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-neutral-dark"></div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
