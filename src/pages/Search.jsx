import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { sampleProducts, tunicProducts } from '../data/dummyData';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  const [query, setQuery] = useState('');
  const allProducts = [...sampleProducts, ...tunicProducts];
  
  const filteredProducts = query 
    ? allProducts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="page-container search-page">
      <div className="search-header">
        <h1>Search Products</h1>
        <div className="search-input-wrapper">
          <FiSearch className="search-icon-large" />
          <input 
            type="text" 
            placeholder="Search for Anarkali, Kurtis, Gowns..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <div className="search-results">
        {query && filteredProducts.length === 0 && (
          <p className="no-results">No products found for "{query}". Try another term.</p>
        )}
        
        {filteredProducts.length > 0 && (
          <div className="shop-products-grid">
            {filteredProducts.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

