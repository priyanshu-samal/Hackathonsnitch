"use client";

import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="relative bg-black text-white px-6 md:px-20 py-32 min-h-screen overflow-hidden">
      {/* Top Right Title */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-6 md:right-20 text-right"
      > 
        <img className="w-20 h-20 md:mt-[100px] md:mr-[380px]" src="/logo/under.png" alt="" />
      </motion.div>

      {/* Bottom Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-10 left-6 md:left-20 w-48 h-48 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg"
      >
        <img
          src="/founder.jpg"
          alt="Founder"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
        />
      </motion.div>

      {/* Bottom Right Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-10 right-6 md:right-20 max-w-[400px] md:max-w-md text-sm md:text-base text-gray-400 space-y-4"
      >
        <h2 className="text-white text-lg md:text-xl font-semibold">
          ( ABOUT Founder )
        </h2>
        <p>
          Siddharth Dungarwal is the Founder and CEO of Snitch, a rapidly
          growing men's fast-fashion brand in India. His entrepreneurial
          journey, marked by resilience and a deep understanding of the fashion
          industry, has been instrumental in positioning Snitch as a major
          player in the Indian market.
        </p>
        <p>
          Snitch envisions becoming India's biggest fashion brand for men and a
          global leader in the apparel industry. The brand aims to empower men
          to express their individuality and style by providing a diverse range
          of trendy, high-quality, and accessible fashion options. Snitch also
          strives to create a community around fashion and self-expression,
          fostering a culture of authenticity and confidence.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
