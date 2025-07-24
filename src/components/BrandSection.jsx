import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function BrandSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Lenis + GSAP ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          window.scrollTo(0, value);
        }
        return window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // pinType: document.body.style.transform ? "transform" : "fixed"
    });

    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        y: -120, // Moves up, feels faster than scroll
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          scroller: document.body,
        },
      });
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-10 px-4 flex flex-col items-center rounded-tl-3xl rounded-tr-3xl md:flex-row md:items-start md:justify-between md:px-20 md:py-24 md:rounded-tl-3xl md:rounded-tr-3xl"
    >
      {/* Left: Logo and Info Grid */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start md:justify-start">
        <img src="/logo/under.png" alt="Snitch Logo" className="w-10 h-10 mb-6 md:mb-10 md:ml-2" />
        <div className="w-full flex flex-col gap-2 mb-8 text-center md:text-left md:mb-0 md:justify-center md:mt-0">
          <div>
            <span className="uppercase text-xs tracking-widest text-gray-400">Year</span>
            <div className="font-semibold text-base mt-1">2019-Present</div>
          </div>
          <div>
            <span className="uppercase text-xs tracking-widest text-gray-400">Category</span>
            <div className="font-semibold text-base mt-1">Menswear | Lifestyle</div>
          </div>
          <div>
            <span className="uppercase text-xs tracking-widest text-gray-400">Services</span>
            <div className="font-semibold text-base mt-1">Branding | Design | DTC eCommerce</div>
          </div>
        </div>
      </div>

      {/* Right: Heading and Paragraph */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:justify-center">
        <h2 className="text-2xl font-serif font-light leading-snug text-center md:text-left md:text-4xl md:mb-8 mb-4 px-2 md:px-0">
          Snitch redefines menswear with bold silhouettes, street-luxe flair, and attitude stitched into every seam.
        </h2>
        <p className="text-sm text-gray-300 text-center md:text-left max-w-md md:max-w-2xl">
          Since 2019, Snitch has stood at the intersection of culture and fashion offering curated drops that challenge the ordinary.
        </p>
      </div>
    </section>
  );
} 