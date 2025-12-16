"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function WhatLookingFor() {
  return (
    <motion.section
      id="what-looking-for"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "var(--font-title)" }}
        >
          What We&apos;re Looking For
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="col-span-2">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Can solve specific needs crowdsourced by our NGOs and Ministry partner",
                "Can be prototyped or accelerated into a working solution within 48h",
                "Address real needs faced by displaced people, host communities, or frontline responders",
                "Are conflict-sensitive, trauma-informed, and ethical by design",
                "Strengthen community resilience, dignity, and trust",
                "Are realistic to pilot in low-resource or high-stress contexts",
                "Contribute to Cambodia’s recovery and long-term resilience post-crisis",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-orange flex items-start gap-4 flex-1 min-w-[300px] max-w-[400px]"
                >
                  <div className="bg-primary-orange/10 p-2 rounded-full">
                    <FaCheck className="text-primary-orange text-lg flex-shrink-0" />
                  </div>
                  <p className="font-body text-neutral-dark/90 text-lg leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
