import React, { useState } from 'react';

const allProducts = [
  // Shirt
  { id: 'shirt1', name: 'Ivory Textured Shirt', price: 'Rs. 2,499.00', sizes: ['S', 'M', 'L', 'XL'], main: '/shirt/shirt1M.jpg', hover: '/shirt/shirt1H.jpg' },
  { id: 'shirt2', name: 'Mustard Embroidered Shirt', price: 'Rs. 2,299.00', sizes: ['S', 'M', 'L'], main: '/shirt/shirtt2M.jpg', hover: '/shirt/shirt2M.jpg' },
  { id: 'shirt3', name: 'Black Embroidered Shirt', price: 'Rs. 2,799.00', sizes: ['M', 'L'], main: '/shirt/shirt3M.jpg', hover: '/shirt/shirt3H.jpg' },
  { id: 'shirt4', name: 'Cream Relaxed Shirt', price: 'Rs. 2,199.00', sizes: ['S', 'M', 'L', 'XL'], main: '/shirt/shirt4M.jpg', hover: '/shirt/shirt4H.jpg' },
  // Pant
  { id: 'pant1', name: 'Black Relaxed Pant', price: 'Rs. 2,199.00', sizes: ['S', 'M', 'L', 'XL'], main: '/Pant/BlackM.jpg', hover: '/Pant/BlackH.jpg' },
  { id: 'pant2', name: 'Cream Wide Pant', price: 'Rs. 2,299.00', sizes: ['S', 'M', 'L'], main: '/Pant/CreamM.jpg', hover: '/Pant/CreamH.jpg' },
  { id: 'pant3', name: 'Beige Straight Pant', price: 'Rs. 2,399.00', sizes: ['M', 'L'], main: '/Pant/BeigeM.jpg', hover: '/Pant/BeigeH.jpg' },
  { id: 'pant4', name: 'Brown Cord Pant', price: 'Rs. 2,499.00', sizes: ['S', 'M', 'L', 'XL'], main: '/Pant/BrownM.jpg', hover: '/Pant/BrownH.jpg' },
  // Hoodie
  { id: 'hoodie1', name: 'Beige Classic Hoodie', price: 'Rs. 2,199.00', sizes: ['S', 'M', 'L', 'XL'], main: '/Hoodie/BeigeM.jpg', hover: '/Hoodie/BeigeH.jpg' },
  { id: 'hoodie2', name: 'Grey Minimal Hoodie', price: 'Rs. 2,299.00', sizes: ['S', 'M', 'L'], main: '/Hoodie/GreyM.jpg', hover: '/Hoodie/GreyH.jpg' },
  { id: 'hoodie3', name: 'Black Street Hoodie', price: 'Rs. 2,399.00', sizes: ['M', 'L'], main: '/Hoodie/BlackM.jpg', hover: '/Hoodie/BlackH.jpg' },
  { id: 'hoodie4', name: 'Green Drop Hoodie', price: 'Rs. 2,499.00', sizes: ['S', 'M', 'L', 'XL'], main: '/Hoodie/greanM.jpg', hover: '/Hoodie/greanH.jpg' },
];

const CategoryProductPage = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="pt-16 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {allProducts.map((prod) => (
          <div
            key={prod.id}
            className="group block cursor-pointer"
            onMouseEnter={() => setHovered(prod.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img
                src={hovered === prod.id ? prod.hover : prod.main}
                alt={prod.name}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2">
                {prod.sizes.map(size => (
                  <span key={size} className="bg-white border border-gray-300 rounded px-2 py-1 text-xs font-semibold shadow-sm">{size}</span>
                ))}
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="font-semibold text-lg">{prod.name}</div>
              <div className="text-gray-500">{prod.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductPage; 