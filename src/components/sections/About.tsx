"use client";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHeart } from "react-icons/fa";
import React from "react";


// Define CardProps interface for type safety
interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-neutral-dark/80 container-corner-cut shadow-lg p-6 flex flex-col items-center text-center border border-primary-yellow/20"
  >
    <div className="p-4 bg-linear-to-br from-primary-orange to-primary-yellow btn-corner-cut mb-4">
      {icon}
    </div>
    <h3 className="font-title text-2xl font-bold text-primary-yellow mb-2">
      {title}
    </h3>
    <p className="font-body text-neutral-light/90">{children}</p>
  </motion.div>
);

export default function About() {

  return (
    <section
      className="relative w-full bg-neutral-dark text-neutral-light px-4 py-20 md:py-28"
      id="about-hackathon"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-title text-4xl md:text-5xl font-bold mb-4"
        >
          About the <span className="text-primary-yellow">Hackathon</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-16 text-neutral-light/80"
        >
          At a time when hundreds and thousands of people are being displaced, and
          host communities and frontline responders are under increasing strain,
          this hackathon creates a space to listen, build responsibly, and act
          together. Over one weekend, participants will work in
          interdisciplinary teams to design and develop working, testable
          prototypes that could help support the emergency response of the aid
          across the country.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-16 text-neutral-light/80 italic"
        >
          This is not about speed for the sake of speed. It is about careful
          innovation that does no harm.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={<FaUsers size={32} className="text-neutral-dark" />}
            title="Co-creation"
          >
            Technologists, designers, educators, and community members working
            together in interdisciplinary teams.
          </Card>
          <Card
            icon={<FaLightbulb size={32} className="text-neutral-dark" />}
            title="Innovation"
          >
            Design and develop working, testable prototypes that strengthen
            resilience, dignity, and social cohesion.
          </Card>
          <Card
            icon={<FaHeart size={32} className="text-neutral-dark" />}
            title="Careful consideration"
          >
            This is not about speed for the sake of speed. It is about careful
            innovation that does no harm.
          </Card>
        </div>
      </div>


    </section >
  );
}

