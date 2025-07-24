import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const productSections = [
  {
    title: "New Shirt",
    color: "#f8fafc",
    folder: "shirt",
    products: [
      { base: "shirt1", name: "Ivory Textured Shirt", price: "Rs. 2,499.00" },
      { base: ["shirtt2M", "shirt2M"], custom: true, name: "Mustard Embroidered Shirt", price: "Rs. 2,299.00" },
      { base: "shirt3", name: "Black Embroidered Shirt", price: "Rs. 2,799.00" },
      { base: "shirt4", name: "Cream Relaxed Shirt", price: "Rs. 2,199.00" }
    ]
  },
  {
    title: "New Pants",
    color: "#f1f5f9",
    folder: "Pant",
    products: [
      { base: "Black", name: "Black Relaxed Pant", price: "Rs. 2,199.00" },
      { base: "Cream", name: "Cream Wide Pant", price: "Rs. 2,299.00" },
      { base: "Beige", name: "Beige Straight Pant", price: "Rs. 2,399.00" },
      { base: "Brown", name: "Brown Cord Pant", price: "Rs. 2,499.00" }
    ]
  },
  {
    title: "New Hoodie",
    color: "#e5e7eb",
    folder: "Hoodie",
    products: [
      { base: "Beige", name: "Beige Classic Hoodie", price: "Rs. 2,199.00" },
      { base: "Grey", name: "Grey Minimal Hoodie", price: "Rs. 2,299.00" },
      { base: "Black", name: "Black Street Hoodie", price: "Rs. 2,399.00" },
      { base: "grean", name: "Green Drop Hoodie", price: "Rs. 2,499.00" }
    ]
  }
];

function ProductCard({ item, folder }) {
  const [isTouching, setIsTouching] = useState(false);
  const handleTouchStart = () => setIsTouching(true);
  const handleTouchEnd = () => setIsTouching(false);
  const isCustom = !!item.custom;
  return (
    <div
      className="flex flex-col items-center flex-shrink-0 w-[98vw] max-w-[600px] md:w-1/4 md:max-w-none md:min-w-0 min-w-[200px] snap-start"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative group w-full h-[45vh] md:h-[480px] rounded-lg overflow-hidden bg-gray-100 shadow transition-all duration-300">
        <img
          src={isCustom ? `/${folder}/${item.base[0]}.jpg` : `/${folder}/${item.base}M.jpg`}
          alt={isCustom ? item.base[0] : item.base}
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${isTouching ? 'opacity-0' : 'group-hover:opacity-0'}`}
        />
        <img
          src={isCustom ? `/${folder}/${item.base[1]}.jpg` : `/${folder}/${item.base}H.jpg`}
          alt={isCustom ? item.base[1] + ' Hover' : item.base + ' Hover'}
          className={`w-full h-full object-cover object-top absolute top-0 left-0 transition-opacity duration-300 ${isTouching ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        />
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
        <div className="text-base font-medium text-gray-800 text-center leading-tight">{item.name}</div>
        <div className="text-sm text-gray-500 mt-1 text-center">{item.price}</div>
      </div>
    </div>
  );
}

export default function LayeredParallaxSections() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP: pin each section until the next section's top hits the navbar
    sectionRefs.current.forEach((panel, i) => {
      const nextSection = sectionRefs.current[i + 1];
      ScrollTrigger.create({
        trigger: panel,
        start: "top 64px",
        endTrigger: nextSection || panel,
        end: nextSection ? "top 64px" : "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        zIndex: i + 1,
        onEnter: () => gsap.to(panel, { zIndex: 10 + i }),
        onLeaveBack: () => gsap.to(panel, { zIndex: i + 1 }),
      });
    });
    setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {productSections.map((sec, i) => (
        <section
          key={i}
          ref={el => (sectionRefs.current[i] = el)}
          className="relative w-full min-h-[60vh] md:min-h-[95vh] flex flex-col justify-start items-start px-4 py-8 rounded-2xl mb-2 shadow-md overflow-x-hidden"
          style={{
            background: sec.color,
            zIndex: i + 1,
            marginTop: i === 0 ? undefined : "-64px"
          }}
        >
          <h2 className="text-2xl font-normal md:text-4xl md:font-medium mb-6 flex items-center md:text-gray-700">
            <span className="text-3xl md:text-5xl mr-2">→</span> {sec.title}
          </h2>
          <div className="flex w-full h-full gap-2 md:gap-4 md:overflow-x-visible overflow-x-auto max-w-full snap-x snap-mandatory scroll-px-2 pr-2">
            {sec.products.map((item) => (
              <ProductCard key={item.custom ? item.base[0] : item.base} item={item} folder={sec.folder} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 