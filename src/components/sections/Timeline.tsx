"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaCoffee,
} from "react-icons/fa";

interface AgendaItem {
  time: string;
  title: string;
  icon?: React.ReactNode;
}

interface DaySchedule {
  day: string;
  subtitle: string;
  location: string;
  items: AgendaItem[];
}

export default function Timeline() {
  const schedule: DaySchedule[] = [
    {
      day: "Saturday",
      subtitle: "Align, Form Teams & Start Building",
      location: "@ CADT",
      items: [
        { time: "8:30–9:00 am", title: "Welcome, purpose & agenda", icon: <FaUsers size={16} /> },
        { time: "9:00–9:20 am", title: "Who's in the room: skills mapping between everyone", icon: <FaUsers size={16} /> },
        { time: "9:20–9:40 am", title: "Field Stories from the ground", icon: <FaComments size={16} /> },
        { time: "9:40–9:55 am", title: "Challenge sharing from NGOs / actors on the ground", icon: <FaLightbulb size={16} /> },
        { time: "9:55–10:30 am", title: "Break-Out Deep-dive Q&A with challenge holders", icon: <FaComments size={16} /> },
        { time: "10:30–11:00 am", title: "Idea sharing & team formation", icon: <FaUsers size={16} /> },
        { time: "11:00 am–2:00 pm", title: "Hacking - Build-up of ideas", icon: <FaLaptopCode size={16} /> },
        { time: "2:00–3:00 pm", title: "Validation & insights from NGO practitioners", icon: <FaLightbulb size={16} /> },
        { time: "3:00–4:00 pm", title: "Peer-to-peer feedback", icon: <FaComments size={16} /> },
        { time: "Evening", title: "Continue refining solutions", icon: <FaLaptopCode size={16} /> },
      ],
    },
    {
      day: "Sunday",
      subtitle: "Refine, Share & Handover",
      location: "@ CADT",
      items: [
        { time: "Morning", title: "Final refinement - Strengthen prototype, clarify value, users, and implementation needs", icon: <FaLaptopCode size={16} /> },
        { time: "4:00–5:00 pm", title: "Solution Showcase - Short demos (≈3 min per project) - NGO invited", icon: <FaTrophy size={16} /> },
        { time: "After demos", title: "Give & Connect - Offers, referrals, connections", icon: <FaUsers size={16} /> },
        { time: "~5:30 pm", title: "End of event", icon: <FaCoffee size={16} /> },
      ],
    },
  ];

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 bg-neutral-dark text-neutral-light"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Event <span className="text-primary-yellow">Agenda</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-neutral-light/70 mb-12 text-lg"
        >
          December 20-21, 2024 at CADT
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((daySchedule: DaySchedule, dayIndex: number) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm container-corner-cut p-6 border border-white/10"
            >
              {/* Day Header */}
              <div className="mb-6 text-center">
                <h3
                  className="text-2xl md:text-3xl font-bold text-primary-yellow mb-2"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {daySchedule.day}
                </h3>
                <p className="text-lg text-neutral-light/90 font-semibold">
                  {daySchedule.subtitle}
                </p>
                <p className="text-sm text-neutral-light/60">{daySchedule.location}</p>
              </div>

              {/* Agenda Items */}
              <div className="space-y-3">
                {daySchedule.items.map((item: AgendaItem, itemIndex: number) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-orange to-primary-yellow rounded flex items-center justify-center text-neutral-dark">
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <span className="text-sm text-primary-yellow font-semibold block">
                        {item.time}
                      </span>
                      <span className="text-neutral-light/90 text-sm">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
