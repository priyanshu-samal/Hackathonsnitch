import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, title: 'New SHIRT', img: '/shirt/1.png' },
  { id: 2, title: 'New PANTS', img: '/pants/1.png' },
  { id: 3, title: 'New HOODIE', img: '/hoodie/1.png' },
  { id: 4, title: 'New SHORTS', img: '/pants/2.png' },
];

export default function NewArrivalsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    
    const sectionElems = gsap.utils.toArray('.arrival-card');
    sectionElems.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
        markers: false,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-8 px-2 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-xl font-bold tracking-tight">
          <span className="mr-2 text-2xl">→</span> NEW ARRIVALS
        </h2>
        <button className="px-4 py-2 text-xs font-semibold border border-black rounded">
          VIEW ALL
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 pb-2 overflow-x-auto scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {products.map((prod) => (
          <Link to={`/product/${prod.id}`} key={prod.id}>
            <div
              className="flex-shrink-0 w-48 p-2 bg-gray-100 rounded-lg arrival-card flex flex-col items-center justify-end"
              style={{ height: 320 }}
            >
              <img
                src={prod.img}
                alt={prod.title}
                className="object-cover w-full h-56 mb-2 rounded"
              />
              <div className="text-sm font-medium text-center">{prod.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 