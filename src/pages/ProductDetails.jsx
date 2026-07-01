import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiCreditCard, FiTruck, FiShield, FiCheck } from 'react-icons/fi';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/dummyData';

const ProductDetails = () => {
  const { id } = useParams();
  
  // Mock data for the product
  const product = {
    id: id || 1,
    title: "Premium Embroidered Anarkali Suit",
    price: "2,499",
    originalPrice: "4,999",
    rating: 4.8,
    reviewsCount: 124,
    description: "Elevate your ethnic wardrobe with this premium Anarkali suit. Crafted from fine georgette fabric, it features intricate zardosi embroidery and comes with a matching dupatta and churidar. Perfect for weddings and festive occasions.",
    features: [
      "Fabric: Premium Georgette",
      "Pattern: Intricate Zardosi Embroidery",
      "Sleeve Length: Three-Quarter Sleeves",
      "Care Instructions: Dry Clean Only"
    ],
    images: [
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rose Pink', hex: '#e84393' },
      { name: 'Mint Green', hex: '#55efc4' },
      { name: 'Navy Blue', hex: '#0984e3' }
    ]
  };

  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)'
    });
  };

  return (
    <div className="product-details-page">
      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb">
          <a href="/">Home</a> / <a href="/shop">Shop</a> / <span>{product.title}</span>
        </nav>

        <div className="pd-main-grid">
          {/* Images Section */}
          <div className="pd-image-gallery">
            <div className="pd-thumbnails">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`pd-thumb ${activeImg === img ? 'active' : ''}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} />
                </div>
              ))}
            </div>
            
            <div 
              className={`pd-main-image ${isZoomed ? 'zoomed' : ''}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => { setIsZoomed(false); setZoomStyle({}); }}
              onMouseMove={handleMouseMove}
            >
              <img src={activeImg} alt={product.title} style={isZoomed ? zoomStyle : {}} />
              <div className="pd-zoom-hint">Hover to Zoom</div>
            </div>
          </div>

          {/* Details Section */}
          <div className="pd-info">
            <h1 className="pd-title">{product.title}</h1>
            
            <div className="pd-rating-row">
              <div className="stars">
                {[1,2,3,4,5].map(star => <FiStar key={star} className={star <= Math.floor(product.rating) ? "filled" : ""} />)}
              </div>
              <span>{product.rating} ({product.reviewsCount} Reviews)</span>
            </div>

            <div className="pd-pricing">
              <span className="current-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discount-tag">50% OFF</span>
            </div>

            {/* Colors */}
            <div className="pd-section">
              <h3 className="pd-subtitle">Color: <span>{selectedColor}</span></h3>
              <div className="pd-colors">
                {product.colors.map((color, idx) => (
                  <button 
                    key={idx} 
                    className={`color-btn ${selectedColor === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select color ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="pd-section">
              <div className="pd-size-header">
                <h3 className="pd-subtitle">Size</h3>
                <button className="size-guide-btn">Size Guide</button>
              </div>
              <div className="pd-sizes">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pd-actions">
              <button className="btn-add-cart">
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="btn-buy-now">
                <FiCreditCard /> Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pd-trust-badges">
              <div className="badge"><FiTruck /> Free Shipping</div>
              <div className="badge"><FiShield /> Secure Payment</div>
              <div className="badge"><FiCheck /> 100% Authentic</div>
            </div>

            {/* Description */}
            <div className="pd-description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feat, idx) => <li key={idx}>{feat}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="pd-related-products">
          <h2 className="section-title"><span className="main-title">You May Also Like</span></h2>
          <ProductCarousel>
             {sampleProducts.slice(0, 6).map((p, i) => (
               <ProductCard key={`related-${i}`} product={p} badge={i === 0 ? "HOT" : null} badgeColor="sale" />
             ))}
          </ProductCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
