"use client";
import { motion } from "framer-motion";


export default function Footer() {


  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-neutral-dark border-t border-primary-yellow/20 text-neutral-light py-8 px-4"
    >
      <div className="max-w-6xl mx-auto flex justify-center text-center">
        <p className="font-body text-neutral-light/80">
          &copy; {new Date().getFullYear()} United for Resilience. All rights
          reserved.
        </p>

      </div>
    </motion.footer>
  );
}
