"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaBan, FaBullhorn, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function CodeOfConduct() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.section
      id="code-of-conduct"
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
          className="text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Code of Conduct
        </motion.h2>
        <div className="space-y-12">
          {/* Main Code of Conduct Intro (Always Visible) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 container-corner-cut shadow-md border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 font-title text-primary-yellow">
              Our Commitment
            </h3>
            <p className="text-neutral-light/90 font-body mb-6">
              Participating in the United for Resilience Hackathon means joining a community dedicated to respect, collaboration, and safe innovation.
              We are committed to providing a harassment-free experience for everyone, regardless of background or identity.
            </p>

            {/* Toggle Button - Sticky */}
            <div className="sticky bottom-8 z-20 flex justify-center mt-8 pointer-events-none">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="pointer-events-auto px-8 py-3 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold btn-corner-cut shadow-lg hover:brightness-110 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
              >
                {isExpanded ? (
                  <>
                    Show Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Read Full Code of Conduct <FaChevronDown />
                  </>
                )}
              </button>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden mt-8"
                >
                  <div className="space-y-8 text-neutral-light/90 font-body pt-4 border-t border-white/10">
                    <section>
                      <h4 className="text-xl font-bold mb-2 text-white">1. Purpose</h4>
                      <p>Collaboratively design practical, ethical, and people-centered solutions. This is a humanitarian and solidarity-driven space, not a political forum.</p>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold mb-2 text-white">2. Core Values</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Respect & Dignity:</strong> Treat all with respect.</li>
                        <li><strong>Human-Centered:</strong> Prioritize safety and dignity.</li>
                        <li><strong>Collaboration:</strong> Share knowledge openly.</li>
                        <li><strong>Do No Harm:</strong> Ensure actions don't put people at risk.</li>
                        <li><strong>Integrity:</strong> Act honestly and responsibly.</li>
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold mb-2 text-white">3. Expected Behavior</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Communicate respectfully and listen actively.</li>
                        <li>Be mindful of trauma and sensitivities.</li>
                        <li>Use inclusive, non-violent language.</li>
                        <li>Credit others’ ideas and collaborate in good faith.</li>
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-xl font-bold mb-2 text-white">4. Unacceptable Behavior</h4>
                      <p className="mb-2">The following will not be tolerated:</p>
                      <ul className="list-disc pl-5 space-y-1 text-primary-orange">
                        <li>Hate speech, harassment, or discrimination.</li>
                        <li>Political propaganda or inflammatory statements.</li>
                        <li>Spreading misinformation or rumors.</li>
                        <li>Exploitation for personal/political gain.</li>
                        <li>Sharing sensitive/graphic info about affected individuals.</li>
                      </ul>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <section>
                        <h4 className="text-xl font-bold mb-2 text-white">5. Information & Data</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Use verified, ethical sources.</li>
                          <li>No personal data without consent.</li>
                          <li>Protect privacy and security.</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="text-xl font-bold mb-2 text-white">6. Media & Communication</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Respect humanitarian nature.</li>
                          <li>Do not speak for communities without consent.</li>
                        </ul>
                      </section>
                    </div>

                    <section>
                      <h4 className="text-xl font-bold mb-2 text-white">7. Reporting & Consequences</h4>
                      <p>Inform an organizer immediately if you witness violations. Reports are confidential. Consequences range from warnings to disqualification and removal.</p>
                    </section>

                    {/* Child Protection embedded here for flow or keep outside? keeping inside for "Full" experience */}
                    <div className="pt-8 border-t border-white/10 mt-8">
                      <h3 className="text-2xl font-bold mb-6 font-title text-primary-orange">
                        Child Protection Policy
                      </h3>
                      <div className="space-y-6 text-neutral-light/90 font-body">
                        <p className="font-bold">At HackTheCrisis, children’s safety comes first.</p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <section>
                            <h4 className="text-lg font-bold mb-2 text-white">Agreements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Do no harm; act in best interests of children.</li>
                              <li>Treat children with respect and care.</li>
                              <li>Use only anonymized/ethical data.</li>
                              <li>Never share identifiable info of children.</li>
                            </ul>
                          </section>

                          <section>
                            <h4 className="text-lg font-bold mb-2 text-primary-red flex items-center gap-2">
                              <FaBan /> Not Allowed
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Abuse, exploitation, or harassment.</li>
                              <li>Political/sensational content involving children.</li>
                              <li>Collecting data directly from children.</li>
                            </ul>
                          </section>
                        </div>

                        <div className="bg-primary-yellow/10 p-4 rounded border border-primary-yellow/30 flex items-start gap-3">
                          <FaBullhorn className="text-primary-yellow mt-1 flex-shrink-0" />
                          <p><strong>Concerns?</strong> Inform an organizer or Child Protection Focal Point immediately. If a child is in danger, contact emergency services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
