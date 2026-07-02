import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "5 Trending Anarkali Styles for the Wedding Season",
    category: "Fashion Trends",
    date: "July 12, 2026",
    excerpt: "The wedding season is just around the corner, and Anarkali suits are making a massive comeback. Here are the top 5 styles you need in your wardrobe.",
    img: "https://images.pexels.com/photos/2034989/pexels-photo-2034989.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "How to Style Your Everyday Kurti",
    category: "Style Guide",
    date: "July 05, 2026",
    excerpt: "Kurtis are the ultimate comfort wear, but that doesn't mean they can't be incredibly chic. Learn how to accessorize and pair your everyday kurtis.",
    img: "https://images.pexels.com/photos/1105342/pexels-photo-1105342.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "The Art of Handloom Weaving",
    category: "Craftsmanship",
    date: "June 28, 2026",
    excerpt: "Take a journey behind the scenes and discover the intricate, time-honored process our artisans use to create our signature handloom sarees and dupattas.",
    img: "https://images.pexels.com/photos/1853685/pexels-photo-1853685.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Blog = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>SCPK Fashion Blog</h1>
        <p>Style tips, trends, and the stories behind our ethnic wear.</p>
      </div>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-img-wrapper">
              <span className="blog-category">{post.category}</span>
              <img src={post.img} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button className="read-more-btn">Read More &rarr;</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

