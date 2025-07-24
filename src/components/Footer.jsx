import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'
// eslint-disable-next-line
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    // Lenis proxy (used in your app)
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          window.scrollTo(0, value)
        }
        return window.scrollY
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    if (footerRef.current) {
      gsap.to(footerRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          scroller: document.body,
        },
      })
      // Explicitly refresh ScrollTrigger after mounting
      setTimeout(() => ScrollTrigger.refresh(), 100)
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="w-full bg-neutral-100 text-black py-14 px-8 md:px-20 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Subscribe */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <img src="/logo/mob.png" alt="Snitch Logo" className="w-10 h-10 mb-6 md:mb-10 md:ml-2" />
          <p className="text-sm text-gray-600">Wear What's Next</p>
          <h3 className="mt-6 font-semibold">Subscribe Now</h3>
          <div className="mt-2 flex items-center border-b border-black">
            <FiMail className="mr-2 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent focus:outline-none flex-1 text-sm"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </motion.div>

        {/* Info Columns */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h4 className="font-bold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Events</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h4 className="font-bold mb-2">Helpful Links</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Services</li>
            <li>Supports</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h4 className="font-bold mb-2">Our Services</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Brands list</li>
            <li>Order</li>
            <li>Return & Exchange</li>
            <li>Fashion list</li>
            <li>Blog</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <h4 className="font-bold mb-2">Contact Us</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex items-center">
              <FiPhone className="mr-2" /> +91 9999 999 999
            </p>
            <p className="flex items-center">
              <FiMail className="mr-2" />snitch@gmail.com
            </p>
          </div>
          <div className="flex space-x-4 mt-4 text-black text-lg">
            <FaFacebook />
            <FaGooglePlus />
            <FaTwitter />
            <FaInstagram />
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
        className="border-t border-gray-300 mt-10 pt-4 text-xs flex flex-col md:flex-row justify-between text-gray-600"
      >
        <p>2025 snitch©company.Ltd. All Rights reserved</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>FAQ</span>
          <span>Privacy</span>
          <span>Terms & Condition</span>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer