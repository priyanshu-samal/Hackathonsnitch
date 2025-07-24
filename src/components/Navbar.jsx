import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Hamburger from 'hamburger-react';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [cartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Hamburger
                toggled={isMenuOpen}
                toggle={toggleMenu}
                size={24}
                color="#374151"
                rounded
              />
            </div>
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              {isDesktop ? (
                <img src="/logo/desk.png" alt="SNITCH Logo" className="h-8 w-auto" />
              ) : (
                <img src="/logo/mob.png" alt="SNITCH Logo" className="h-8 w-auto" />
              )}
            </Link>
            <div className="flex items-center space-x-2">
              <Link
                to="/cart"
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors relative"
                aria-label="Shopping cart"
                onClick={closeMenu}
              >
                <FiShoppingCart className="w-6 h-6" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-4 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-black font-bold text-lg">Topwear</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>T-Shirts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Casual Shirts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Formal Shirts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sweatshirts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sweaters</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Jackets</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Blazers & Coats</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Suits</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-black font-bold text-lg">Bottomwear</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Jeans</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Casual Trousers</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Formal Trousers</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Shorts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Track Pants & Joggers</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Chinos</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Cargo Pants</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-black font-bold text-lg">Footwear</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Casual Shoes</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sports Shoes</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Formal Shoes</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sneakers</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sandals & Floaters</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Boots</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Socks</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-black font-bold text-lg">Fashion Accessories</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Wallets</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Belts</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Perfumes & Body Mists</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Sunglasses & Frames</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Watches</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Ties, Cufflinks & Pocket Squares</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Caps & Hats</Link></li>
                      <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors" onClick={closeMenu}>Bags & Backpacks</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 flex gap-8">
                  <Link to="/signin" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors" onClick={closeMenu}><FiLogIn /> Login</Link>
                  <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors" onClick={closeMenu}>About</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar; 