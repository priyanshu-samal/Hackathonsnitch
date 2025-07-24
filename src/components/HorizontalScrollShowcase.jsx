import React, { useState, useEffect } from 'react';
import HorizontalScrollMobile from './HorizontalScrollMobile';
import HorizontalScrollDesktop from './HorizontalScrollDesktop';

const HorizontalScrollShowcase = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <HorizontalScrollMobile /> : <HorizontalScrollDesktop />}
    </>
  );
};

export default HorizontalScrollShowcase;