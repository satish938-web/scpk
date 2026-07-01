import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductCarousel = ({ children }) => {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        if (rowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
          // If we reached the end, smoothly scroll back to start. Otherwise scroll right.
          if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
            rowRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            rowRef.current.scrollTo({ left: scrollLeft + 300, behavior: 'smooth' });
          }
        }
      }, 3500); // Auto-move every 3.5 seconds
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% for context preservation
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
      // Re-check after smooth scrolling animation completes
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <div 
      className="carousel-wrapper" 
      onMouseEnter={() => { setIsHovered(true); checkScroll(); }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className={`carousel-btn left ${canScrollLeft ? 'visible' : ''}`} 
        onClick={() => scroll('left')} 
        aria-label="Scroll left"
        disabled={!canScrollLeft}
      >
        <FiChevronLeft />
      </button>
      
      <div 
        className="product-row scrollable" 
        ref={rowRef} 
        onScroll={checkScroll}
      >
        {children}
      </div>

      <button 
        className={`carousel-btn right ${canScrollRight ? 'visible' : ''}`} 
        onClick={() => scroll('right')} 
        aria-label="Scroll right"
        disabled={!canScrollRight}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
