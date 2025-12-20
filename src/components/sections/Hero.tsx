"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionArrow from "@/components/SectionArrow";

export default function Hero() {
  // Mouse position for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Particles state for mouse trail effect
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add particle at mouse position
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouseX.set(touch.clientX);
      mouseY.set(touch.clientY);

      const newParticle = {
        id: Date.now() + Math.random(),
        x: touch.clientX,
        y: touch.clientY,
      };
      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  // Remove particles after animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-center items-center text-neutral-light overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Interactive mouse-following glow effect */}
      <motion.div
        className="pointer-events-none fixed w-64 h-64 rounded-full bg-gradient-radial from-primary-yellow/30 via-primary-orange/20 to-transparent blur-3xl z-10"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Particle trail effect */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed w-3 h-3 rounded-full bg-primary-yellow z-10"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            left: particle.x,
            top: particle.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}

      {/* Floating animated shapes in front of background */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary-yellow/30 to-primary-orange/20 rounded-full filter blur-2xl"
          animate={{
            x: [0, 80, 0, -80, 0],
            y: [0, -80, 0, 80, 0],
            scale: [1, 1.3, 1, 0.7, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-primary-red/25 to-primary-orange/15 rounded-full filter blur-2xl"
          animate={{
            x: [0, -60, 0, 60, 0],
            y: [0, 60, 0, -60, 0],
            scale: [1, 0.8, 1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-br from-primary-yellow/20 to-primary-red/10 rounded-full filter blur-xl"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 text-center px-4 py-20"
      >
        <h1 className="font-title text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold mb-4 text-neutral-light drop-shadow-lg leading-tight px-2">
          UNITED FOR RESILIENCE HACKATHON
        </h1>
        <p className="font-body text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-neutral-light/90">
          A 2-day human-centered hackathon that brings together technologists,
          designers, educators, community members, and humanitarian actors to
          co-create practical solutions that support people and communities
          affected by conflict and displacement in Cambodia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#get-involved"
            onClick={(e) => handleSmoothScroll(e, "#get-involved")}
            className="px-8 py-3.5 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold btn-corner-cut shadow-lg hover:brightness-110 hover:shadow-xl transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-neutral-dark"
          >
            Get Involved
          </a>
          <a
            href="#why-resilience"
            onClick={(e) => handleSmoothScroll(e, "#why-resilience")}
            className="px-8 py-3.5 bg-neutral-light/10 text-neutral-light font-bold btn-corner-cut shadow-lg hover:bg-neutral-light/20 transform transition-colors duration-300 ease-in-out border border-neutral-light/30 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-neutral-dark"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Arrow pointing down to next section */}
      <SectionArrow direction="down" targetId="why-resilience" />
    </section>
  );
}

