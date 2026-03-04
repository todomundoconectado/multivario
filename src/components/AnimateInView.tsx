import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateInViewProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimateInView({
    children,
    className = "",
    delay = 0.05,
}: AnimateInViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // suave easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
