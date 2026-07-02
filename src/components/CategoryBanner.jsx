import React from 'react';

const CategoryBanner = ({ title, images }) => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  
  return (
    <section className="category-banner" aria-label={`${title} Section`}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} fashion collection`}
          style={{
            position: 'absolute',
            inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: idx === currentIdx ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            animation: idx === currentIdx ? 'zoomEffect 10s infinite alternate ease-in-out' : 'none',
            zIndex: 1
          }}
        />
      ))}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(58,20,32,0.35)', zIndex: 2 }} aria-hidden="true" />
      <h2 style={{ position: 'relative', zIndex: 3 }}>{title}</h2>
    </section>
  );
};

export default CategoryBanner;

