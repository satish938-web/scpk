import React from 'react';
import { FiEye, FiShoppingBag, FiVideo } from 'react-icons/fi';

const WatchAndShopCard = ({ item }) => (
  <article className="reel-card" aria-label={`Shoppable video for ${item.title}`}>
    {item.isInsta ? (
      <iframe 
        src={`${item.video}?autoplay=1&muted=1`}
        className="reel-video-thumb"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media; autoplay"
      />
    ) : (
      <video 
        src={item.video} 
        className="reel-video-thumb" 
        autoPlay 
        loop 
        muted 
        playsInline
      />
    )}
    <div className="reel-view-badge" aria-label={`${item.views} views`}>
      <FiEye aria-hidden="true" /> {item.views}
    </div>
    <div className="live-badge">
      <span className="live-dot"></span> LIVE
    </div>
    <div className="reel-overlay">
      <figure className="reel-product-thumb">
        <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=200" alt={`Product thumbnail for ${item.title}`} loading="lazy" />
        <div className="shop-icon-circle"><FiShoppingBag aria-hidden="true" /></div>
      </figure>
      <h3 className="reel-title">{item.title}</h3>
    </div>
  </article>
);

export default WatchAndShopCard;

