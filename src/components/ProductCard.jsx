import { Link } from 'react-router-dom';

const ProductCard = ({ product, badge, badgeColor }) => (
  <article className="pro-card" itemScope itemType="https://schema.org/Product">
    <figure className="pro-image-wrapper">
      {badge && <div className={`pro-badge ${badgeColor}`} aria-label={`Product status: ${badge}`}>{badge}</div>}
      <Link to={`/product/${product.id || 1}`}>
        <img src={product.img} alt={`Buy ${product.title} online`} className="pro-image" itemProp="image" loading="lazy" />
      </Link>
      <figcaption className="pro-hover-action">
        <button className="add-cart-btn" aria-label={`Add ${product.title} to cart`}>Quick Add</button>
      </figcaption>
    </figure>
    <div className="pro-details">
      <Link to={`/product/${product.id || 1}`} style={{ textDecoration: 'none' }}>
        <h3 className="pro-title" itemProp="name">{product.title}</h3>
      </Link>
      <div className="pro-sizes" aria-label="Available sizes">
        <span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
      </div>
      <div className="pro-pricing" itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="priceCurrency" content="INR" />
        <span className="pro-price" itemProp="price" content={product.price.replace(/,/g, '')}>₹{product.price}</span>
        {product.originalPrice && <span className="pro-original-price" aria-label="Original price">₹{product.originalPrice}</span>}
      </div>
    </div>
  </article>
);

export default ProductCard;

