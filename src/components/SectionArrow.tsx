"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionArrowProps {
    direction: "up" | "down";
    targetId: string;
}

export default function SectionArrow({
    direction,
    targetId,
}: SectionArrowProps) {
    const handleClick = () => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Original arrow points top-left
    // For DOWN: rotate 225deg to point straight down
    // For UP: rotate 45deg to point straight up
    const rotation = direction === "down" ? 225 : 45;

    return (
        <motion.div
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 cursor-pointer"
            animate={{
                y: [0, -12, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            onClick={handleClick}
        >
            <Image
                src="/arrow.png"
                alt={direction === "down" ? "Scroll down" : "Scroll to top"}
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity drop-shadow-lg"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        </motion.div>
    );
}
