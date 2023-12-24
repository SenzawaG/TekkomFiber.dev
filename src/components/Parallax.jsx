'use client'

import { useEffect } from 'react';

const Parallax = ({ children, speed }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const translateY = scrollTop * speed;
      document.getElementById('parallax').style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div id="parallax" style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;