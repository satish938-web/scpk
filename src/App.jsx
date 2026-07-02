import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './css/pages.css';
import './css/extra-pages.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container dark-theme">
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;


