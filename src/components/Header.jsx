import React, { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { categories } from '../data/dummyData';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="top-navbar">
        <div className="nav-container">
          <div className="logo">SCPK</div>
          
          <nav className="main-nav" aria-label="Primary Navigation">
            <a href="/">HOME</a>
            <div 
              className="dropdown" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <a 
                href="#" 
                className="active" 
                onClick={(e) => e.preventDefault()}
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="shop-dropdown-menu"
              >
                SHOP <span className="arrow"><FiChevronDown style={{marginLeft: '4px'}} aria-hidden="true"/></span>
              </a>
              <ul 
                id="shop-dropdown-menu"
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                role="menu"
              >
                <li role="none"><a role="menuitem" href="/category/clearance">CLEARANCE SALE</a></li>
                <li role="none"><a role="menuitem" href="/category/part-280">PART 280</a></li>
                <li role="none"><a role="menuitem" href="/category/newly-launched">NEWLY LAUNCHED 🛍️</a></li>
                <li role="none"><a role="menuitem" href="/category/under-1500">UNDER ₹1500</a></li>
                <li role="none"><a role="menuitem" href="/category/anarkali-set">ANARKALI SET</a></li>
                <li role="none"><a role="menuitem" href="/category/co-ord-sets">CO-ORD SETS</a></li>
                <li role="none"><a role="menuitem" href="/category/dupatta-set">DUPATTA SET</a></li>
                <li role="none"><a role="menuitem" href="/category/gown">GOWN</a></li>
                <li role="none"><a role="menuitem" href="/category/kaftan">KAFTAN</a></li>
                <li role="none"><a role="menuitem" href="/category/kurti">KURTI</a></li>
                <li role="none"><a role="menuitem" href="/category/palazzo-set">PALAZZO SET</a></li>
                <li role="none"><a role="menuitem" href="/category/party-wear">PARTY WEAR</a></li>
                <li role="none"><a role="menuitem" href="/category/tunic">TUNIC</a></li>
              </ul>
            </div>
            <a href="/wholesale">WHOLESALE</a>
          </nav>

          <div className="search-bar" role="search">
            <select className="category-select" aria-label="Select Category">
              <option>Select Category</option>
              <option value="aliya-cut">Aliya Cut</option>
              <option value="anarkali-set">Anarkali Set</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="co-ord-sets">Co-Ord Sets</option>
              <option value="dupatta-set">Dupatta Set</option>
              <option value="gharara-set">Gharara Set</option>
              <option value="gown">Gown</option>
              <option value="kaftan">Kaftan</option>
              <option value="kurti">Kurti</option>
              <option value="palazzo-set">Palazzo Set</option>
              <option value="party-wear">Party Wear</option>
              <option value="tunic">Tunic</option>
            </select>
            <input type="text" placeholder="Search products..." aria-label="Search products" />
            <button className="search-btn" aria-label="Submit Search"><FiSearch aria-hidden="true" /></button>
          </div>

          <nav className="nav-icons" aria-label="User tools">
            <button className="icon" aria-label="Wishlist"><FiHeart aria-hidden="true" /></button>
            <button className="icon" aria-label="User Account"><FiUser aria-hidden="true" /></button>
            <button className="icon" aria-label="Shopping Cart"><FiShoppingCart aria-hidden="true" /></button>
          </nav>
        </div>
      </header>

      {/* Horizontal Category Bar */}
      <nav className="category-navbar" aria-label="Secondary Categories">
        <div className="nav-container">
          {categories.map((cat, index) => (
            <a key={index} href={`/category/${cat.name.toLowerCase()}`} className="cat-link">
              {cat.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
