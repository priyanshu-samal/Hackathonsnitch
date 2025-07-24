import { useEffect, useRef } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import gsap from "gsap";

export default function TubelightText({ children }) {
  const flickerRef = useRef(null);

  useEffect(() => {
    // Flicker animation - 2 seconds total
    const tl = gsap.timeline({ repeat: 0 });

    tl.set(flickerRef.current, { opacity: 0 });

    // Start flicker after 0.5s delay
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1, delay: 0.5 });
    tl.to(flickerRef.current, { opacity: 0.2, duration: 0.15 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0, duration: 0.2 });
    tl.to(flickerRef.current, { opacity: 0.8, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0.1, duration: 0.15 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0.3, duration: 0.2 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0, duration: 0.15 });
    tl.to(flickerRef.current, { opacity: 0.9, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0.2, duration: 0.15 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0.5, duration: 0.2 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.1 });
    tl.to(flickerRef.current, { opacity: 0.8, duration: 0.15 });
    tl.to(flickerRef.current, { opacity: 1, duration: 0.5 }); // final stable

  }, []);

  return (
    <span ref={flickerRef}>
      {children}
    </span>
  );
} 