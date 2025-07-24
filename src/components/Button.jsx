import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const RoundButton = () => {
  const xTo = useRef();
  const yTo = useRef();
  const buttonRef = useRef(null);
  const divRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(divRef.current, "x", {duration: 0.8, ease: "power3"});
    yTo.current = gsap.quickTo(divRef.current, "y", {duration: 0.8, ease: "power3"});
    
    gsap.to(divRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    });
  }, {scope: buttonRef});

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 1,
      duration: 0.3,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.3,
    });
  });

  const handleMouseMove = contextSafe((e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const { top, left } = rect;
      xTo.current(e.clientX - left);
      yTo.current(e.clientY - top);
    }
  });

  return (
    <button
      ref={buttonRef}
      className="relative border-2 border-solid border-black px-5 py-2 rounded-xl text-black overflow-hidden hover:text-white hover:border-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div 
        ref={divRef} 
        className="absolute w-[200px] h-[150px] bg-black left-0 top-0 pointer-events-none rounded-[50%] -z-10"
      />
      <span className="relative z-10 font-bold">Check New Arrival !</span>
    </button>
  );
};

export default RoundButton;