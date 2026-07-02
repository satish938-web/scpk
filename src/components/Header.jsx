import React, { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { categories } from '../data/dummyData';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white border-b border-gray-800 py-3 sticky top-0 z-[100] font-body">
        <div className="w-[95%] max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-8">
          
          <Link to="/" className="text-3xl font-black tracking-wider text-white font-display italic hover:text-ivory transition-colors">
            SCPK
          </Link>
          
          <nav className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide" aria-label="Primary Navigation">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors uppercase">HOME</Link>
            <div 
              className="relative inline-block group" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a 
                href="#" 
                className={`text-gray-300 hover:text-white transition-colors uppercase flex items-center gap-1 ${isDropdownOpen ? 'text-white' : ''}`}
                onClick={(e) => e.preventDefault()}
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                SHOP <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true"/>
              </a>
              
              {/* Dropdown Menu */}
              <ul 
                className={`absolute top-full -left-4 bg-white min-w-[220px] shadow-[0_8px_16px_rgba(0,0,0,0.1)] z-[1000] rounded-b-lg py-2 mt-4 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                role="menu"
              >
                {[
                  { name: 'CLEARANCE SALE', path: '/category/clearance' },
                  { name: 'PART 280', path: '/category/part-280' },
                  { name: 'NEWLY LAUNCHED 🛍️', path: '/category/newly-launched' },
                  { name: 'UNDER ₹1500', path: '/category/under-1500' },
                  { name: 'ANARKALI SET', path: '/category/anarkali-set' },
                  { name: 'CO-ORD SETS', path: '/category/co-ord-sets' },
                  { name: 'DUPATTA SET', path: '/category/dupatta-set' },
                  { name: 'GOWN', path: '/category/gown' },
                  { name: 'KAFTAN', path: '/category/kaftan' },
                  { name: 'KURTI', path: '/category/kurti' },
                  { name: 'PALAZZO SET', path: '/category/palazzo-set' },
                  { name: 'PARTY WEAR', path: '/category/party-wear' },
                  { name: 'TUNIC', path: '/category/tunic' }
                ].map((item, idx) => (
                  <li key={idx} role="none" className="w-full border-b border-gray-100 last:border-none">
                    <a 
                      role="menuitem" 
                      href={item.path}
                      className="block px-5 py-3 text-[13px] font-semibold text-charcoal uppercase hover:bg-gray-50 hover:text-rose-deep hover:pl-7 transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/wholesale" className="text-gray-300 hover:text-white transition-colors uppercase">WHOLESALE</Link>
          </nav>

          <div className="hidden md:flex bg-gray-100 rounded-full overflow-hidden h-11 w-full max-w-[450px]" role="search">
            <select className="border-none px-4 bg-transparent border-r border-gray-300 outline-none text-gray-500 text-[13px] font-medium cursor-pointer" aria-label="Select Category">
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
            <input type="text" placeholder="Search products..." className="border-none px-4 flex-1 outline-none bg-transparent text-sm text-charcoal placeholder-gray-400" aria-label="Search products" />
            <button className="bg-transparent border-none px-4 cursor-pointer text-lg text-gray-500 hover:text-rose-deep transition-colors" aria-label="Submit Search">
              <FiSearch aria-hidden="true" />
            </button>
          </div>

          <nav className="flex gap-5 lg:gap-6 text-xl lg:text-2xl text-gray-300" aria-label="User tools">
            <Link to="/search" className="md:hidden flex items-center justify-center hover:text-rose-deep hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="Search">
              <FiSearch aria-hidden="true" />
            </Link>
            <Link to="/login" className="flex items-center justify-center hover:text-rose-deep hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="Wishlist">
              <FiHeart aria-hidden="true" />
            </Link>
            <Link to="/login" className="flex items-center justify-center hover:text-rose-deep hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="User Account">
              <FiUser aria-hidden="true" />
            </Link>
            <Link to="/cart" className="flex items-center justify-center hover:text-rose-deep hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="Shopping Cart">
              <FiShoppingCart aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Horizontal Category Bar */}
      <nav className="hidden md:block bg-gray-50 border-b border-gray-200" aria-label="Secondary Categories">
        <div className="max-w-[1400px] mx-auto flex justify-center flex-wrap gap-5 py-3 px-4">
          {categories.map((cat, index) => (
            <a 
              key={index} 
              href={`/category/${cat.name.toLowerCase()}`} 
              className="text-charcoal font-bold text-[11px] uppercase tracking-wider hover:text-rose-deep transition-colors whitespace-nowrap"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
