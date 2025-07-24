import React, { useState, useEffect, useRef } from 'react'
//eslint-disable-next-line
import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import TubelightText from './TubelightText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from './Button'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const imageRef = useRef(null)

  const videos = [
    {
      src: '/video/vid1.mp4',
      title: 'Unleash Your Style',
      subtitle: 'New Drop. New Energy.',
      badge1: 'Summer Sale',
      badge2: 'New Offer'
    },
    {
      src: '/video/vid2.mp4',
      title: 'Modern. Minimal. You.',
      subtitle: 'Elevate Your Wardrobe.',
      badge1: 'Limited Edition',
      badge2: 'Best Seller'
    },
    {
      src: '/video/vid3.mp4',
      title: 'Crafted to Perfection',
      subtitle: 'Where Style Meets Substance.',
      badge1: 'Premium',
      badge2: 'Exclusive'
    }
  ]

  // When the video has finished playing, move to the next one
  const handleVideoEnded = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length
    setCurrentVideoIndex(nextIndex)
  }

  // Scroll animation for desktop image
  useEffect(() => {
    let anim;
    if (!isMobile && imageRef.current) {
      gsap.set(imageRef.current, { y: 0 }); // Always start at y: 0
      anim = gsap.to(imageRef.current, {
        y: 200, // only moves downward
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top", // y: 0 when image top hits viewport top
          end: "+=300", // how much scroll for full movement
          scrub: 1,
        }
      });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    return () => {
      if (anim) {
        anim.scrollTrigger && anim.scrollTrigger.kill();
        anim.kill();
      }
    };
  }, [isMobile]);

  // Desktop Hero Section
  if (!isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-white">
        {/* Left Side - Text Content */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-12 lg:px-16 z-10">
          <div className="max-w-md">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight"
            >
              Crafted to<br />
              seamlessly<br />
              blend <em className="italic">fashion</em><br />
              with <em className="italic"><TubelightText>function</TubelightText></em>.
            </motion.h1>
            
           <Button/>
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-0 top-0 w-5/6 h-full overflow-visible"
        >
          <img
            ref={imageRef}
            src="/new.png"
            alt="Fashion Model"
            className="w-full h-full object-contain object-right"
          />
        </motion.div>

        {/* Subtle lighting effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute top-1/5 right-1/6 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full z-5" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-1/3 left-1/5 w-36 h-36 bg-gradient-to-br from-white/8 to-transparent rounded-full z-5" 
        />
      </section>
    )
  }

  // Mobile Hero Section (unchanged)
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Video Background */}
      <video
        src={videos[currentVideoIndex].src}
        autoPlay
        muted
        playsInline
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '95vh', 
          objectFit: 'cover',
          zIndex: 0
        }}
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>

      {/* Promotional Badges */}
      <div className="absolute top-8 left-4 right-4 flex justify-between z-20">
        <div className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
          {videos[currentVideoIndex].badge1}
        </div>
        <div className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
          {videos[currentVideoIndex].badge2}
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-32 left-6 right-6 z-20">
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
          {videos[currentVideoIndex].title}
        </h1>
        <p className="text-lg text-white mb-6 opacity-90">
          {videos[currentVideoIndex].subtitle}
        </p>
        
        {/* Call-to-Action Button */}
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
          Check Out
        </button>
      </div>
    </div>
  )
}

export default HeroSection 