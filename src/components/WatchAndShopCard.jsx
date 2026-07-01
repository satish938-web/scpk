import React from 'react';
import { FiEye, FiShoppingBag } from 'react-icons/fi';

const WatchAndShopCard = ({ item }) => (
  <article className="reel-card" aria-label={`Shoppable video for ${item.title}`}>
    <img src={item.img} alt={`Video thumbnail for ${item.title}`} className="reel-video-thumb" loading="lazy" />
    <div className="reel-view-badge" aria-label={`${item.views} views`}>
      <FiEye aria-hidden="true" /> {item.views}
    </div>
    <div className="reel-overlay">
      <figure className="reel-product-thumb">
        <img src={item.img} alt={`Product thumbnail for ${item.title}`} loading="lazy" />
        <div className="shop-icon-circle"><FiShoppingBag aria-hidden="true" /></div>
      </figure>
      <h3 className="reel-title">{item.title}</h3>
    </div>
  </article>
);

export default WatchAndShopCard;
