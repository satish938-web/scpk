import React from 'react';
import ProductCard from '../components/ProductCard';
import { sampleProducts, tunicProducts } from '../data/dummyData';

const Shop = () => {
  const allProducts = [...sampleProducts, ...tunicProducts];

  return (
    <div className="w-[95%] max-w-[1600px] mx-auto px-6 py-12 md:py-20 font-body text-charcoal">
      <div className="text-center mb-16">
        <h1 className="font-display italic font-semibold text-4xl md:text-5xl text-maroon mb-4">
          Shop All Collections
        </h1>
        <p className="text-gray-500 font-light text-lg">
          Discover our complete range of premium ethnic wear
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        <aside className="w-full md:w-[250px] shrink-0">
          <h3 className="text-2xl font-display font-semibold italic text-maroon mb-6 border-b border-gray-200 pb-3 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-16 after:h-[2px] after:bg-rose-deep">
            Filters
          </h3>
          
          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-charcoal tracking-wider uppercase text-sm">
              Categories
            </h4>
            <ul className="space-y-3">
              {['Anarkali Sets', 'Kurtis', 'Gowns', 'Tunics'].map((cat) => (
                <li key={cat}>
                  <label className="cursor-pointer text-gray-500 flex items-center gap-3 hover:text-rose-deep transition-colors">
                    <input type="checkbox" className="accent-rose-deep w-4 h-4 cursor-pointer" /> 
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-charcoal tracking-wider uppercase text-sm">
              Price Range
            </h4>
            <ul className="space-y-3">
              {['Under ₹1500', '₹1500 - ₹3000', 'Above ₹3000'].map((price) => (
                <li key={price}>
                  <label className="cursor-pointer text-gray-500 flex items-center gap-3 hover:text-rose-deep transition-colors">
                    <input type="radio" name="price" className="accent-rose-deep w-4 h-4 cursor-pointer" /> 
                    {price}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
