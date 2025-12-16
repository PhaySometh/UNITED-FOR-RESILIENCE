"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-primary-yellow/20"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <h3 className="text-xl font-semibold font-body text-neutral-light">
          {question}
        </h3>
        <span className="text-primary-yellow">
          {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-neutral-light/80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "When does the hackathon take place?",
      answer:
        "This weekend from 19th - 21st December. Kick-off Friday at 1pm, ends Sunday at 6:00 p.m. You have 48 hours to build.",
    },
    {
      question: "Do we get support during the hackathon?",
      answer:
        "Yes! Mentors (professionals) are at your side for feedback and knowledge check-ins throughout the 48 hours.",
    },
    {
      question: "How does a virtual hackathon work?",
      answer:
        "It happens online. We provide tools for joint development, Telegram for communication, and video conferencing for sessions.",
    },
    {
      question: "How many can participate?",
      answer:
        "No limit! Simply register by midnight on Thursday.",
    },
    {
      question: "Are there prerequisites for participation?",
      answer:
        "No. We look for programmers, designers, creatives, problem solvers, and socially committed citizens. Just be motivated and have time/internet.",
    },
    {
      question: "Do I have to be able to code?",
      answer:
        "No! Everyone motivated is welcome.",
    },
    {
      question: "What can be submitted as a result?",
      answer:
        "Digital or physical solutions. Anything that helps face the crisis. Don't reinvent the wheel—adapt existing ideas to Cambodia.",
    },
    {
      question: "What happens to the results afterwards?",
      answer:
        "The aim is for results to be used. We are setting up a support program and sourcing partners/funding for the best ideas.",
    },
    {
      question: "Do I have to speak English/Khmer?",
      answer:
        "Materials are in both languages. You can submit in either English or Khmer.",
    },
    {
      question: "Can I register as a team?",
      answer:
        "Yes! Coordinate with friends, register separately, and then group up on a challenge.",
    },
    {
      question: "What do I get for participating?",
      answer:
        "You help others, potentially build solutions for humanitarian efforts, and access post-hackathon support.",
    },
    {
      question: "Can I submit a project that's already working?",
      answer:
        "Yes! Submit directly to our final submission form to be detailed in our catalogue for partners.",
    },
  ];

  return (
    <motion.section
      id="faqs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-title"
        >
          Frequently Asked{" "}
          <span className="text-primary-yellow">Questions</span>
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
