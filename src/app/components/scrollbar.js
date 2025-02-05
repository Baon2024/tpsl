'use client'
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        scrollYProgress.onChange((latest) => console.log(latest));
      }, [scrollYProgress]);

    return (
        <motion.div 
          //classname="progress-bar"
          style={{ scaleX: scrollYProgress, zIndex: 9999, height: "15px", position: "fixed", width: "100%", background: "#0070f3", transformOrigin: "left", top: 0, left: 0 }}
        />
    )
} 