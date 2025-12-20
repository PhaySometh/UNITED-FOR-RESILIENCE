"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Solution {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    websiteUrl?: string;
    githubUrl?: string;
    team?: string;
    tags?: string[];
}

// Solutions data - replace with actual projects after hackathon
const solutions: Solution[] = [
    {
        id: "1",
        name: "Example Project 1",
        description: "A brief description of how this project helps affected communities.",
        thumbnail: "/solutions/placeholder-1.png",
        websiteUrl: "https://example.com",
        team: "Team Alpha",
        tags: ["Healthcare", "Mobile App"],
    },
    {
        id: "2",
        name: "Example Project 2",
        description: "Another innovative solution connecting displaced communities with resources.",
        thumbnail: "/solutions/placeholder-2.png",
        websiteUrl: "https://example.com",
        team: "Team Beta",
        tags: ["Communication", "Web Platform"],
    },
];

export default function Solutions() {
    return (
        <motion.section
            id="solutions"
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
                    className="text-4xl md:text-5xl font-bold mb-4 font-title text-center"
                >
                    Solutions <span className="text-primary-orange">Showcase</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg md:text-xl text-neutral-dark/80 mb-12 max-w-2xl mx-auto text-center"
                >
                    Discover the innovative solutions created by our participants.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white container-corner-cut shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-orange/30 to-primary-yellow/30 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white/50">
                                    {solution.name.charAt(0)}
                                </span>
                                {solution.tags && (
                                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                                        {solution.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-neutral-dark/80 text-neutral-light text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 font-title text-neutral-dark group-hover:text-primary-orange transition-colors">
                                    {solution.name}
                                </h3>
                                {solution.team && (
                                    <p className="text-sm text-primary-orange font-semibold mb-2">{solution.team}</p>
                                )}
                                <p className="font-body text-neutral-dark/70 mb-4 line-clamp-3">
                                    {solution.description}
                                </p>
                                <div className="flex gap-3">
                                    {solution.websiteUrl && (
                                        <a
                                            href={solution.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-orange to-primary-yellow text-neutral-dark font-bold text-sm btn-corner-cut shadow-md hover:brightness-110 flex items-center justify-center gap-2"
                                        >
                                            <FaExternalLinkAlt size={12} />
                                            Visit Site
                                        </a>
                                    )}
                                    {solution.githubUrl && (
                                        <a
                                            href={solution.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-neutral-dark text-neutral-light font-bold text-sm btn-corner-cut shadow-md hover:bg-neutral-dark/80 flex items-center justify-center gap-2"
                                        >
                                            <FaGithub size={14} />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
