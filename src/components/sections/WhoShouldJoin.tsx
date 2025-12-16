"use client";
import { motion } from "framer-motion";

export default function WhoShouldJoin() {
  return (
    <motion.section
      id="who-should-join"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Who Should Join
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-neutral-light/80 mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          This hackathon is open to developers, designers, entrepreneurs, and
          anyone passionate about creating positive change.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {[
            "Developers",
            "Humanitarian",
            "Communication",
            "Creatives",
            "Resource mobilisers",
            "Entrepreneurs",
          ].map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-6 container-corner-cut shadow-md border border-white/10 flex flex-col items-center justify-center h-full min-h-[120px]"
            >
              <h3 className="text-xl font-bold text-primary-yellow uppercase tracking-wider font-title">
                {role}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
