"use client";
import { motion } from "framer-motion";

export default function Partners() {
  const initiatedBy = [
    { name: "CADT", logo: "/cadt.png", width: "w-48 md:w-56" },
    { name: "FirstWave", logo: "/firstwave.png", width: "w-32 md:w-40" },
    { name: "Impact Hub Phnom Penh", logo: "/impact_hub.png", width: "w-32 md:w-40" },
  ];

  const supportedBy = [
    { name: "Ministry of Post and Telecommunication", logo: "/mptc.png", width: "w-80 md:w-96" },
  ];

  return (
    <motion.section
      id="partners"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 font-title"
        >
          Our <span className="text-primary-yellow">Partners</span>
        </motion.h2>

        {/* Initiated By Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-body font-bold text-neutral-light/80 mb-10 uppercase tracking-widest"
          >
            Initiated by
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-12 md:gap-20 items-center"
          >
            {initiatedBy.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`transition-all duration-300 ${partner.width}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Supported By Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-body font-bold text-neutral-light/80 mb-10 uppercase tracking-widest"
          >
            Supported by
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center items-center"
          >
            {supportedBy.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`transition-all duration-300 ${partner.width}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
