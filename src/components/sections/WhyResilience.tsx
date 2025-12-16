"use client";
import { motion } from "framer-motion";
import SectionArrow from "@/components/SectionArrow";

export default function WhyResilience() {
  return (
    <section
      id="why-resilience"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-light text-dark px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-title text-4xl md:text-5xl font-bold mb-6">
          Why UNITED FOR RESILIENCE?
        </h2>
        <p className="font-body text-lg md:text-xl mb-4">
          Now more than ever, Cambodia needs spaces where people can come
          together across disciplines, sectors, and backgrounds—not only to
          respond to urgent needs, but also to imagine pathways toward healing,
          trust, and recovery.
        </p>
        <p className="font-body text-lg md:text-xl mb-4">
          We do not claim that a hackathon can solve every challenge brought by
          conflict. But we believe that collective effort, grounded in empathy
          and responsibility, can create meaningful tools, services, and
          approaches that make a difference.
        </p>
      </motion.div>

      {/* Arrow pointing up to hero section */}
      <SectionArrow direction="up" targetId="hero" />
    </section>
  );
}

