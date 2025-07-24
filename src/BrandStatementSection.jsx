import React from "react";

const BrandStatementSection = () => {
  return (
    <section className="w-full bg-white text-black py-16 px-4 flex flex-col items-center justify-center font-satoshi">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-6">
        {/* Fashion-related SVG: Minimal hanger */}
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M32 12c0-3.314 2.686-6 6-6s6 2.686 6 6c0 2.21-1.79 4-4 4s-4-1.79-4-4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 16v6l-24 24c-2.21 2.21-.65 6 2.48 6h43.04c3.13 0 4.69-3.79 2.48-6L32 22" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Effortless Style, <span className="text-[#FF8709]">Unmatched Comfort</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 font-light">
          Discover the new era of fashion—where minimalism meets bold design. Crafted for those who dare to stand out.
        </p>
      </div>
    </section>
  );
};

export default BrandStatementSection; 