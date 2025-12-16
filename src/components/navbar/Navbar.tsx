"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: "About", href: "#about-hackathon" },
    { label: "Challenges", href: "#challenges" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Partners", href: "#partners" },
    { label: "FAQs", href: "#faqs" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-neutral-dark/95 backdrop-blur-md shadow-lg"
            : "bg-neutral-dark/80 backdrop-blur-sm"
          } border-b border-primary-yellow/20`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <Image
              src="/UNITED FOR RESILIENCE HACKATHON.png"
              alt="United for Resilience"
              width={160}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation - Hidden below lg (1024px) */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="font-body text-sm xl:text-base text-neutral-light relative px-2 py-1 group whitespace-nowrap"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-yellow">
                  {item.label}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-yellow to-primary-orange transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
            {/* Apply Button with corner cut */}
            <a
              href="#get-involved"
              onClick={(e) => handleSmoothScroll(e, "#get-involved")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold btn-corner-cut shadow-lg hover:shadow-xl hover:brightness-110 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-neutral-dark"
            >
              Apply
            </a>
          </div>

          {/* Mobile menu button - Shown below lg */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-neutral-light hover:text-primary-yellow focus:outline-none focus:ring-2 focus:ring-primary-yellow z-50"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-72 sm:w-80 h-full z-50 bg-neutral-dark shadow-2xl lg:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-neutral-light hover:text-primary-yellow transition-colors"
                >
                  <FaTimes size={28} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col px-6 py-4 gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="font-body text-lg text-neutral-light hover:text-primary-yellow transition-colors py-3 px-4 hover:bg-neutral-light/5"
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Apply Button with corner cut */}
                <motion.a
                  href="#get-involved"
                  onClick={(e) => handleSmoothScroll(e, "#get-involved")}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 }}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold btn-corner-cut shadow-lg hover:brightness-110 transition-all duration-300 text-center"
                >
                  Apply
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
