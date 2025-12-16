"use client";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus size={32} className="text-neutral-dark" />,
      title: "Human-Centered",
      description:
        "Trauma-informed design that prioritizes the needs and dignity of affected communities.",
    },
    {
      icon: <FaChalkboardTeacher size={32} className="text-neutral-dark" />,
      title: "Mentor Validation",
      description:
        "Continuous feedback and validation from mentors at each stage of the process.",
    },
    {
      icon: <FaLaptopCode size={32} className="text-neutral-dark" />,
      title: "Build Mode",
      description:
        "Intensive building phase starting Saturday afternoon to create working prototypes.",
    },
    {
      icon: <FaUsers size={32} className="text-neutral-dark" />,
      title: "Walkthrough",
      description:
        "A stakeholder showcase and walkthrough on Sunday, focusing on dialogue not pitch competition.",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title uppercase"
        >
          How It <span className="text-primary-yellow">Works</span>
        </motion.h2>

        <div className="relative">
          {/* Connecting line - hidden on mobile, positioned to go through the squares */}
          {/* Adjust top value based on icon size + spacing */}
          <div className="hidden md:block absolute top-[120px] left-0 w-full h-[2px] bg-primary-yellow/50 -translate-y-1/2 z-0"></div>

          <div className="relative grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center z-10"
              >
                {/* Icon */}
                <div className="mb-8 p-6 bg-gradient-to-br from-primary-orange to-primary-yellow btn-corner-cut shadow-lg">
                  {step.icon}
                </div>

                {/* Square Marker on the line */}
                <div className="mb-8 w-4 h-4 bg-primary-yellow transform rotate-45 shadow-[0_0_10px_rgba(255,213,70,0.8)]"></div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold mb-4 font-title text-primary-yellow uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="font-body text-neutral-light/80 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
