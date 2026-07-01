import React from 'react';
import { FiTruck, FiRefreshCw, FiShield, FiStar } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import WatchAndShopCard from '../components/WatchAndShopCard';
import ProductCarousel from '../components/ProductCarousel';
import { 
  sampleProducts, 
  catImages, 
  occasionImages, 
  watchAndShopData,
  tunicProducts
} from '../data/dummyData';

const Home = () => {
  const banners = [
    {
      title: "Discover the New Collection",
      desc: "Premium Ethnic Wear for Every Occasion",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Clearance Sale Extravaganza",
      desc: "Up to 50% Off on Selected Kurtis",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Summer Wedding Specials",
      desc: "Elegant Anarkali Sets & Bridal Gowns",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }, 
    {
      title: "Handloom Heritage",
      desc: "Authentic Weaves Directly from Artisans",
      img: "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentMiddleSlide, setCurrentMiddleSlide] = React.useState(0);

  const middleBanners = [
    {
      title: "New Collection",
      desc: "Explore our exclusive handpicked designs for this season. Get up to 20% off on premium ethnic wear.",
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Bridal Exclusives",
      desc: "Make your special day unforgettable with our heavily embroidered bespoke lehengas.",
      img: "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Everyday Elegance",
      desc: "Comfortable, breathable cotton kurtis perfect for the office and casual outings.",
      img: "https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      title: "Festive Glamour",
      desc: "Stand out at your next party with our latest collection of premium georgette gowns.",
      img: "https://images.pexels.com/photos/3331484/pexels-photo-3331484.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  React.useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    
    const middleTimer = setInterval(() => {
      setCurrentMiddleSlide((prev) => (prev + 1) % middleBanners.length);
    }, 4500); // slightly different timing so they don't sync exactly

    return () => {
      clearInterval(heroTimer);
      clearInterval(middleTimer);
    };
  }, [banners.length, middleBanners.length]);

  return (
    <>
      {/* 1. Full-Bleed Hero Banner */}
      <section 
        className="hero-banner-full"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${banners[currentSlide].img})` }}
      >
        <div className="hero-content">
          <h1>{banners[currentSlide].title}</h1>
          <p>{banners[currentSlide].desc}</p>
          <button className="shop-now-btn" aria-label={`Shop ${banners[currentSlide].title} now`}>Shop Now</button>
        </div>
        <div className="carousel-dots" role="tablist">
          {banners.map((_, i) => (
            <button 
              key={i} 
              className={`dot ${i === currentSlide ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === currentSlide}
            ></button>
          ))}
        </div>
      </section>

      {/* Guarantees Bar */}
      <div className="guarantees-bar">
        <div className="guarantee-item">
          <span className="g-icon"><FiTruck /></span>
          <div>
            <h4>Free Shipping</h4>
            <p>On orders over ₹999</p>
          </div>
        </div>
        <div className="guarantee-item">
          <span className="g-icon"><FiRefreshCw /></span>
          <div>
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="guarantee-item">
          <span className="g-icon"><FiShield /></span>
          <div>
            <h4>Secure Payment</h4>
            <p>100% safe checkout</p>
          </div>
        </div>
        <div className="guarantee-item">
          <span className="g-icon"><FiStar /></span>
          <div>
            <h4>Premium Quality</h4>
            <p>Top authentic fabrics</p>
          </div>
        </div>
      </div>

      <div className="home-layout">
        <main className="main-home-content">
          

          {/* Shop by Occasion */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Shop By Occasion</span></h2>
            <div className="occasion-grid">
              {[
                { title: 'Wedding' },
                { title: 'Festive' },
                { title: 'Party Wear' },
                { title: 'Casual' }
              ].map((occ, i) => (
                <div key={i} className="occasion-card">
                  <img src={occasionImages[i]} alt={occ.title} />
                  <div className="occasion-overlay">
                    <h3>{occ.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Design of the Day */}
          <section className="home-section flash-sale">
            <div className="flash-header">
              <h2>✨ Design of the Day</h2>
              <div className="countdown-blocks">
                <span>05</span>:<span>42</span>:<span>10</span>
              </div>
            </div>
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={i} product={p} badge="HOT" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Middle Promotional Banner */}
          <section 
            className="middle-banner"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${middleBanners[currentMiddleSlide].img}')` }}
          >
            <div className="middle-banner-content">
              <h2>{middleBanners[currentMiddleSlide].title}</h2>
              <p>{middleBanners[currentMiddleSlide].desc}</p>
              <button className="shop-now-btn">Explore Now</button>
            </div>
          </section>

          {/* Best Seller of the Month */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Best Seller of the Month</span></h2>
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`best-${i}`} product={p} badge="BEST" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Dupatta Set (New Collection) */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Dupatta Set</span> <span className="subtitle">(New Collection)</span></h2>
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`dup-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Tunic (New Tunic Collection) */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Tunic</span> <span className="subtitle">(New Tunic Collection)</span></h2>
            <ProductCarousel>
               {tunicProducts.map((p, i) => (
                 <ProductCard key={`tunic-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Trending Colors */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Trending Colors</span></h2>
            <ProductCarousel>
               {[
                 { name: 'Rose Pink', hex: '#e84393' },
                 { name: 'Teal Blue', hex: '#00cec9' },
                 { name: 'Mustard Gold', hex: '#fdcb6e' },
                 { name: 'Royal Purple', hex: '#6c5ce7' }
               ].map((color, i) => (
                 <div key={i} className="pro-card color-card" style={{ background: color.hex }}>
                   <span className="color-name">{color.name}</span>
                 </div>
               ))}
            </ProductCarousel>
          </section>

          {/* Kurti (New Collection) */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Kurti</span> <span className="subtitle">(New Collection)</span></h2>
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`kurti-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Anarkali Set */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Anarkali Set</span> <span className="subtitle">(New Collection)</span></h2>
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`anarkali-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>


          {/* Co-Ord Set */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Co-Ord Set</span></h2>
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`coord-${i}`} product={p} badge="HOT" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Party Wear */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Party Wear</span></h2>
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`party-${i}`} product={p} badge="PREMIUM" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Palazzo Set */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Palazzo Set</span></h2>
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`palazzo-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Gown */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Gowns</span> <span className="subtitle">(New Collection)</span></h2>
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`gown-${i}`} product={p} badge="EXCLUSIVE" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Trending Now */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Trending Now</span></h2>
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`trend-${i}`} product={p} badge="TRENDING" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Watch And Shop */}
          <section className="home-section">
            <h2 className="section-title" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>Watch And Shop</h2>
            <div className="reels-grid">
              {watchAndShopData.map((item, i) => (
                <WatchAndShopCard key={`reel-${i}`} item={item} />
              ))}
            </div>
          </section>

          {/* 6. Testimonials */}
          <section className="home-section testimonials">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testi-grid">
              {[1,2].map(i => (
                <div key={i} className="testi-card">
                  <div className="stars">★★★★★</div>
                  <p>"Absolutely love the quality and design. Will definitely buy again! The fabric is so premium."</p>
                  <h4>- Verified Buyer {i}</h4>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Home;
