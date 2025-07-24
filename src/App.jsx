import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import CategoryProductPage from './pages/CategoryProductPage';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import ScrollToTop from './components/ScrollTop';
import './App.css';

const App = () => {
  return (
    <Router>
      
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<CategoryProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;