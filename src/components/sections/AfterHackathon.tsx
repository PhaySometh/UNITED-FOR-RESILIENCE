"use client";
import { motion } from "framer-motion";

export default function AfterHackathon() {
  return (
    <motion.section
      id="after-hackathon"
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
          After the Hackathon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-neutral-light/80 mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The journey doesn&apos;t end with the hackathon. Here&apos;s what
          happens next.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 container-corner-cut shadow-md border border-white/10 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary-yellow font-title">
              Selected Projects Receive:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-light/80 font-body">
              <li>Support for pilot design</li>
              <li>Connections to NGOs, funders, or implementers</li>
              <li>Opportunities for refinement and scaling</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 container-corner-cut shadow-md border border-white/10 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary-yellow font-title">
              Monday December 22nd
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-light/80 font-body">
              <li>12:00 pm: Announcement of the top ideas</li>
              <li>New initiatives to take ideas and solutions further... to be continued!</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
