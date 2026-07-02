import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { title: "Anarkali Suits", img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "Trending" },
  { title: "Designer Kurtis", img: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "Bestseller" },
  { title: "Evening Gowns", img: "https://images.pexels.com/photos/2034989/pexels-photo-2034989.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "New Collection" },
  { title: "Tunics & Tops", img: "https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "Must Have" },
  { title: "Bridal Wear", img: "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "Premium" },
  { title: "Dupatta Sets", img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600", badge: "Limited Edition" }
];

const Categories = () => {
  return (
    <div className="w-[95%] max-w-[1600px] mx-auto px-6 py-12 md:py-20 font-body">
      <div className="text-center mb-16">
        <h1 className="font-display italic font-semibold text-4xl md:text-5xl text-maroon mb-4">
          All Categories
        </h1>
        <p className="text-gray-500 font-light text-lg">
          Browse our collections by category
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Link to="/shop" key={idx} className="relative rounded-[15px] overflow-hidden h-[350px] block group shadow-[0_10px_30px_rgba(58,20,32,0.1)]">
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {cat.badge && (
              <div className="absolute top-[22px] -left-[35px] bg-rose-deep text-white py-1.5 px-10 font-bold -rotate-45 z-10 shadow-lg uppercase text-[10px] tracking-widest">
                {cat.badge}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(58,20,32,0.85)] to-transparent flex items-end p-8">
              <h2 className="text-white font-display italic font-semibold text-3xl">
                {cat.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
