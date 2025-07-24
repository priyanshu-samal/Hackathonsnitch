"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
//eslint-disable-next-line
import { motion, useMotionValue, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollDesktop = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let lenis;
    function setupHorizontalScroll() {
      lenis = new Lenis({ smooth: true });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      const hs = horizontalRef.current, sec = sectionRef.current;
      if (!hs || !sec) return;
      hs.style.width = '500vw';
      const scrollWidth = hs.scrollWidth;
      const viewportWidth = window.innerWidth;
      gsap.to(hs, {
        x: -(scrollWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: `+=${scrollWidth - viewportWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    function cleanup() {
      ScrollTrigger.getAll().forEach(t => t.kill());
      Lenis.destroyAll && Lenis.destroyAll();
      if (horizontalRef.current) horizontalRef.current.style.width = '';
    }

    setupHorizontalScroll();
    window.addEventListener('resize', () => {
      cleanup();
      setupHorizontalScroll();
    });
    return () => {
      cleanup();
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const eyeX = useTransform(x, [0, 1], [-5, 5]);
  const eyeY = useTransform(y, [0, 1], [-2, 2]);

  const text =
    "Redefining streetwear for the bold and unapologetic Snitch delivers style that doesn’t follow trends, it sets them.";
  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#18181b] font-satoshi px-0 md:px-0 overflow-hidden"
    >
      <div
        ref={horizontalRef}
        className="flex flex-col md:flex-row h-full"
        style={{ minHeight: '100vh', width: '100vw' }}
        onMouseMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - bounds.left) / bounds.width);
          y.set((e.clientY - bounds.top) / bounds.height);
        }}
      >
        <div className="flex items-center justify-center px-8 text-center w-full">
          <motion.h1
            className="text-[#efddbf] text-4xl md:text-9xl font-bold leading-tight flex flex-wrap justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {words.map((word, i) => {
              const lw = word.toLowerCase();

              if (lw === 'them.') {
                const baseWord = word.slice(0, -1);
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <motion.span className="inline-block">{baseWord}</motion.span>
                    <motion.span
                      className="inline-block relative"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      .
                      <motion.img
                        src="/anime/hanging.png"
                        alt="Hanging man"
                        className="absolute top-30 left-1/2 -translate-x-1/2 w-[150px] h-[150px]"
                      />
                    </motion.span>
                    &nbsp;
                  </span>
                );
              }

              if (lw === 'redefining') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    {word.split('').map((c, j) => (
                      <motion.span key={j} className="relative inline-block">
                        {j === 0 && (
                          <motion.img
                            src="/anime/megaphone.png"
                            alt="Megaphone"
                            className="absolute -top-8 -left-[53px] w-[150px] h-[120px]"
                            animate={{ rotate: [-5, 5, -5] }}
                            transition={{
                              duration: 0.2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        )}
                        {c}
                      </motion.span>
                    ))}
                    &nbsp;
                  </span>
                );
              }

              if (lw === 'streetwear') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <motion.img
                      src="/anime/guy.png"
                      alt="Walking Guy"
                      className="absolute -top-40 left-[380px] w-[180px] h-[220px]"
                      animate={{ x: [0, 40, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {word}&nbsp;
                  </span>
                );
              }

              if (lw === 'bold') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <motion.img
                      src="/anime/another.png"
                      alt="Walking Guy"
                      className="absolute top-30 left-[140px] w-[150px] h-[220px]"
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.span
                      animate={{ x: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              }

              if (lw === 'snitch') {
                return (
                  <span key={i} className="inline-block mx-2 relative">
                    {word.split('').map((c, j) => (
                      <motion.span
                        key={j}
                        className="inline-block relative"
                        animate={
                          c.toLowerCase() === 's'
                            ? { rotate: [0, 15, -15, 0] }
                            : {}
                        }
                        transition={
                          c.toLowerCase() === 's'
                            ? {
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }
                            : {}
                        }
                      >
                        {c}
                        {c.toLowerCase() === 's' && (
                          <motion.img
                            src="/anime/clip.png"
                            alt="Pin"
                            className="absolute -top-10 left-0 w-[550px] h-[100px]"
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        )}
                      </motion.span>
                    ))}
                    &nbsp;
                  </span>
                );
              }

              if (lw === 'style') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <motion.img
                      src="/anime/tape.png"
                      alt="Tape"
                      className="absolute top-full mt-2 left-20 w-[150px] h-[150px]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {word.split('').map((c, j) => (
                      <motion.span
                        key={j}
                        className="inline-block"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1 + j * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: 'easeInOut',
                        }}
                      >
                        {c}
                      </motion.span>
                    ))}
                    &nbsp;
                  </span>
                );
              }

              if (lw === 'follow') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <motion.img
                      src="/anime/me.png"
                      alt="Jiggle Icon"
                      className="absolute -top-20 left-1/2 -translate-x-1/2 w-[100px] h-[100px]"
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.span className="inline-block">{word}&nbsp;</motion.span>
                  </span>
                );
              }

              if (lw === 'trends') {
                return (
                  <span key={i} className="relative inline-block mx-2">
                    <img
                      src="/anime/me.png"
                      alt="Astronomer"
                      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120px] h-[120px]"
                    />
                    <motion.span className="inline-block">
                      {word}&nbsp;
                    </motion.span>
                    <motion.span
                      className="absolute top-1 right-0 w-3 h-3 bg-[#efddbf] rounded-full"
                      style={{ translateX: eyeX, translateY: eyeY }}
                    />
                  </span>
                );
              }

              const bounce = [0, 3, 7, 12, 15];
              return (
                <motion.span
                  key={i}
                  className="inline-block mx-1"
                  animate={
                    bounce.includes(i)
                      ? { scale: [1, 0.9, 1.1, 1] }
                      : {}
                  }
                  transition={
                    bounce.includes(i)
                      ? {
                          type: 'tween',
                          ease: 'easeInOut',
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 1.8,
                        }
                      : {}
                  }
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollDesktop;
