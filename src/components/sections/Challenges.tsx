"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Challenges() {
  const challengeData: Challenge[] = [
    {
      icon: <FaShieldAlt size={24} className="text-neutral-dark" />,
      title: "Emergency Information & Communication",
      description:
        "Solutions that help people access clear, reliable, and timely information (verified updates, misinformation prevention, low-literacy tools).",
    },
    {
      icon: <FaHandHoldingHeart size={24} className="text-neutral-dark" />,
      title: "Humanitarian Aid Coordination",
      description:
        "Improving how aid is delivered, tracked, and coordinated (matching needs with resources, supply chain visibility).",
    },
    {
      icon: <FaUsers size={24} className="text-neutral-dark" />,
      title: "Support for Displaced People",
      description:
        "Tools that support displaced people (shelter coordination, family tracing, access to basic services).",
    },
    {
      icon: <FaShieldAlt size={24} className="text-neutral-dark" />,
      title: "Child & Youth Protection",
      description:
        "Solutions prioritizing children's safety: safe education access, child-friendly info, risk identification.",
    },
    {
      icon: <FaHandHoldingHeart size={24} className="text-neutral-dark" />,
      title: "Mental Health & Psychosocial Support",
      description:
        "Approaches to support emotional well-being: peer support, stress management, trauma-informed resources.",
    },
    {
      icon: <FaUsers size={24} className="text-neutral-dark" />,
      title: "Community Resilience & Mutual Aid",
      description:
        "Strengthening local solidarity: community coordination platforms, skills mapping, host community support.",
    },
    {
      icon: <FaHandHoldingHeart size={24} className="text-neutral-dark" />,
      title: "Livelihoods & Economic Recovery",
      description:
        "Helping stabilize incomes: cash-for-work concepts, temporary income opportunities, small business support.",
    },
    {
      icon: <FaShieldAlt size={24} className="text-neutral-dark" />,
      title: "Digital Safety & Ethics",
      description:
        "Ensuring safe and ethical solutions: privacy-by-design, safe data handling, ethical guidelines.",
    },
    {
      icon: <FaUsers size={24} className="text-neutral-dark" />,
      title: "Inclusion & Accessibility",
      description:
        "Ensuring no one is left behind: women, children, elderly, PWDs, minority groups, offline solutions.",
    },
    {
      icon: <FaHandHoldingHeart size={24} className="text-neutral-dark" />,
      title: "Coordination with Existing Actors",
      description:
        "Connecting with existing services: mapping NGOs, referral mechanisms, avoiding duplication.",
    },
  ];

  return (
    <motion.section
      id="challenges"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-light text-neutral-dark"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-title"
        >
          The{" "}
          <span
            className="text-primary-orange"
            style={{ fontWeight: "var(--font-weight-bold)" }}
          >
            Challenges
          </span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {challengeData.map((challenge: Challenge, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white p-4 container-corner-cut shadow-md text-center cursor-pointer flex flex-col items-center h-full"
            >
              <div className="inline-block p-3 bg-gradient-to-br from-primary-orange to-primary-yellow btn-corner-cut mb-3">
                {/* Clone element to change size safely if needed, or just rely on CSS */}
                <div className="text-2xl">{challenge.icon}</div>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-2 font-title text-neutral-dark leading-tight">
                {challenge.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-neutral-dark/70 hidden md:block">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
