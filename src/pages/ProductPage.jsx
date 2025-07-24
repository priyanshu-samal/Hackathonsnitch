
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//eslint-disable-next-line
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const productImages = {
  1: '/shirt/1.png',
  2: '/pants/1.png',
  3: '/hoodie/1.png',
  4: '/pants/2.png',
};

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Dummy data for product
  const product = {
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: productImages[id] || '/shirt/1.png',
    description:
      'A timeless classic, this white t-shirt is made from 100% premium cotton for ultimate comfort and a perfect fit. An essential wardrobe staple.',
    reviews: [
      { user: 'Alex', rating: 5, comment: 'Incredibly soft and fits perfectly!' },
      { user: 'Jane', rating: 4, comment: 'Great quality, but runs a bit large.' },
    ],
  };

  const handleAddToCart = () => {
    // Logic to add to cart
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <div className="pt-16">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            className="w-full mt-6 md:w-1/2 md:mt-0 md:ml-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl font-semibold text-gray-800">${product.price}</p>
            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">({product.reviews.length} reviews)</span>
            </div>
            <p className="mt-6 text-gray-700">{product.description}</p>
            <div className="flex items-center mt-8 space-x-4">
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-l"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-r"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <motion.button
                className="flex items-center px-6 py-3 text-white bg-black rounded-lg shadow-lg"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="mt-12">
          <div className="border-b">
            <button
              className={`px-4 py-2 ${
                activeTab === 'description' ? 'border-b-2 border-black' : ''
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'reviews' ? 'border-b-2 border-black' : ''
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
          <div className="mt-6">
            {activeTab === 'description' && (
              <p className="text-gray-700">{product.description}</p>
            )}
            {activeTab === 'reviews' && (
              <div>
                {product.reviews.map((review, i) => (
                  <div key={i} className="py-4 border-b">
                    <p className="font-semibold">{review.user}</p>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, j) => (
                        <FiStar key={j} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 