import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import CategoryBanner from '../components/CategoryBanner';
import '../css/Home.css';

const Home = () => {
  const banners = [
    {
      title: "Grace, Woven In",
      desc: "Premium Ethnic Wear for Every Woman, Every Occasion",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Clearance Sale Extravaganza",
      desc: "Up to 50% Off on Selected Kurtis, While Stocks Last",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Summer Wedding Specials",
      desc: "Elegant Anarkali Sets & Bridal Gowns for Her Big Day",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Handloom Heritage",
      desc: "Authentic Weaves, Sourced Directly From Women Artisans",
      img: "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(heroTimer);
  }, [banners.length]);

  return (
    <>
      <Helmet>
        <title>SCPK | Premium Ethnic Wear for Women — Anarkalis, Kurtis & Gowns</title>
        <meta name="description" content="Shop SCPK for the latest premium ethnic wear for women — anarkali suits, designer kurtis, lehengas and gowns. Explore our new collections today with free shipping!" />
        <link rel="canonical" href="https://www.scpk.com/" />
      </Helmet>

      {/* Announcement Strip */}
      <div className="announcement-strip">
        Free Shipping Over ₹999 &nbsp;•&nbsp; New Arrivals Weekly &nbsp;•&nbsp; Easy 30-Day Returns
      </div>

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
                  <img src={occasionImages[i]} alt={`${occ.title} wear for women`} />
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

          {/* Best Seller of the Month */}
          <section className="home-section">
            <CategoryBanner title="BEST SELLER OF THE MONTH" images={["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`best-${i}`} product={p} badge="BEST" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Dupatta Set (New Collection) */}
          <section className="home-section">
            <CategoryBanner title="DUPATTA SET (NEW COLLECTION)" images={["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`dup-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Tunic (New Tunic Collection) */}
          <section className="home-section">
            <CategoryBanner title="TUNIC (NEW COLLECTION)" images={["https://images.unsplash.com/photo-1550614000-4b95dd2475a8?auto=format&fit=crop&w=1600&h=500&q=80"]} />
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
            <CategoryBanner title="KURTI (NEW COLLECTION)" images={["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`kurti-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Anarkali Set */}
          <section className="home-section">
            <CategoryBanner title="ANARKALI SET" images={["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`anarkali-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Co-Ord Set */}
          <section className="home-section">
            <CategoryBanner title="CO-ORD SET" images={["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`coord-${i}`} product={p} badge="HOT" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Party Wear */}
          <section className="home-section">
            <CategoryBanner title="PARTY WEAR" images={["https://images.unsplash.com/photo-1550614000-4b95dd2475a8?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].reverse().map((p, i) => (
                 <ProductCard key={`party-${i}`} product={p} badge="PREMIUM" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Palazzo Set */}
          <section className="home-section">
            <CategoryBanner title="PALAZZO SET" images={["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`palazzo-${i}`} product={p} badge="NEW" badgeColor="new" />
               ))}
            </ProductCarousel>
          </section>

          {/* Gown */}
          <section className="home-section">
            <CategoryBanner title="GOWNS" images={["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {[...sampleProducts].slice(1).concat(sampleProducts[0]).map((p, i) => (
                 <ProductCard key={`gown-${i}`} product={p} badge="EXCLUSIVE" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Trending Now */}
          <section className="home-section">
            <CategoryBanner title="TRENDING NOW" images={["https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&h=500&q=80"]} />
            <ProductCarousel>
               {sampleProducts.map((p, i) => (
                 <ProductCard key={`trend-${i}`} product={p} badge="TRENDING" badgeColor="sale" />
               ))}
            </ProductCarousel>
          </section>

          {/* Watch And Shop */}
          <section className="home-section">
            <h2 className="section-title"><span className="main-title">Watch And Shop</span></h2>
            <div className="reels-grid">
              {watchAndShopData.map((item, i) => (
                <WatchAndShopCard key={`reel-${i}`} item={item} />
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="home-section testimonials">
            <h2 className="section-title"><span className="main-title">What Our Customers Say</span></h2>
            <div className="testi-grid">
              {[
                { name: 'Verified Buyer 1', quote: 'Absolutely love the quality and design. Will definitely buy again — the fabric feels so premium against the skin.' },
                { name: 'Verified Buyer 2', quote: 'The anarkali I ordered fit like it was tailored for me. Compliments all evening at the wedding!' }
              ].map((t, i) => (
                <div key={i} className="testi-card">
                  <div className="stars">★★★★★</div>
                  <p>"{t.quote}"</p>
                  <h4>{t.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="newsletter-band">
            <h2>Join the SCPK Circle</h2>
            <p>New arrivals, styling notes and members-only offers — straight to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </section>

        </main>
      </div>
    </>
  );
};

export default Home;


