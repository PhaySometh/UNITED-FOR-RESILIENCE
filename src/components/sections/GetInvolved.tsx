"use client";
import { motion } from "framer-motion";
import { FaCode, FaHandshake, FaBullhorn } from "react-icons/fa";

export default function GetInvolved() {
  const involvementOptions = [
    {
      icon: <FaBullhorn size={32} className="text-neutral-dark" />,
      title: "Submit a Problem",
      description:
        "Submit a problem your community has experienced or an idea that could help. You don't have to participate to share.",
      buttonText: "Submit Idea",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeJtf7TjbugBYfjayx0xeySPO1vqyr00GrcF1o-mPux0yjEPw/viewform",
    },
    {
      icon: <FaCode size={32} className="text-neutral-dark" />,
      title: "Hack with Us",
      description:
        "Apply to join, form a team, and prototype solutions in 48 hours. Developers, Creatives, Humanitarians welcome.",
      buttonText: "Apply to Hack",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdjUnk2hCC7tatWrTVwyV0n1CkH1BBXGqcd88ktvws6AeWvRA/viewform",
    },
    {
      icon: <FaHandshake size={32} className="text-neutral-dark" />,
      title: "Become a Mentor",
      description:
        "Offer guidance and advice to teams to help them operationalize their solutions.",
      buttonText: "Join as Mentor",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSe_VLES3ht1cfzY_kKA8aTSIXTV8HhzLVciY5oKgI43xiWVLw/viewform",
    },
    {
      icon: <FaHandshake size={32} className="text-neutral-dark" />,
      title: "Support a Project",
      description:
        "Offer sponsorship, funding, or staff time to develop solutions further through your NGO or company.",
      buttonText: "Support Us",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfTEERuHPSgQ_CvRdwuqBFaiimlI97wrM76xXZowfwkiU5s1g/viewform",
    },
  ];

  return (
    <motion.section
      id="get-involved"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28 px-4 bg-neutral-light text-neutral-dark"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-title"
        >
          Get{" "}
          <span className="text-primary-orange" style={{}}>
            Involved
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-neutral-dark/80 mb-12 max-w-2xl mx-auto"
        >
          There are many ways to participate and support our mission. Find the
          one that&apos;s right for you.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 container-corner-cut shadow-lg flex flex-col"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-primary-orange to-primary-yellow btn-corner-cut mb-6 self-center">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-title text-neutral-dark">
                {option.title}
              </h3>
              <p className="font-body text-neutral-dark/80 mb-6 flex-grow">
                {option.description}
              </p>
              <a
                href={option.href}
                className="mt-auto px-6 py-3 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold btn-corner-cut shadow-lg hover:brightness-110 hover:shadow-xl transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2"
              >
                {option.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
