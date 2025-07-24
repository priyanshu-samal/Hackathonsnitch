import React from 'react';

const HorizontalScrollMobile = () => {
  return (
    <section className="relative w-full h-[90vh] bg-[#18181b] font-satoshi px-6 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Text Section */}
        <div className="flex flex-col w-full max-w-full pt-8">
          <p className="text-lg text-gray-200 font-light mb-6 text-center">
            Discover a new era of fashion minimal, bold, and iconic. Crafted for those who dare to stand out.
          </p>
          <div className="relative w-full">
            <span
              className="block text-sm font-medium text-white bg-[#ac3030] px-6 py-3 rounded-lg w-full shadow-lg mx-auto mb-6"
              style={{
                minWidth: '180px',
                maxWidth: '100%',
                boxShadow: '0 8px 24px 0 rgba(0,0,0,0.22), 0 2px 6px 0 rgba(0,0,0,0.14)',
              }}
            >
              We are not just fabric stitched with thread.
            </span>
            <span
              className="block text-sm font-medium text-black bg-[#efddbf] px-6 py-3 rounded-lg shadow mx-auto mb-8"
              style={{ minWidth: '180px', maxWidth: '100%' }}
            >
              We are rebellion wrapped in elegance.
            </span>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full max-w-full mt-6">
          <div className="w-[150px] h-[150px] opacity-80 bg-transparent mx-auto mt-[60px]">
            <img src="/slider/3.png" alt="Fashion Showcase" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollMobile;