import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const Checkout = () => {
  return (
    <motion.div
      className="min-h-screen bg-black px-8 md:px-20 pt-32 pb-16 text-white font-serif"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            CHECKOUT
          </h1>

          <p className="text-sm mb-6">
            DO YOU HAVE AN ACCOUNT?{" "}
            <span className="underline cursor-pointer text-orange-500 hover:text-orange-600">
              LOGIN
            </span>
          </p>

          {/* PERSONAL INFORMATION */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">PERSONAL INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                placeholder="Email Address"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Code"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Phone"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
            </div>
          </div>

          {/* SHIPPING INFORMATION */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">SHIPPING INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="First Name"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Last Name"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Country"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="City"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Post Code"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
            </div>
            <input
              placeholder="Address"
              className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white w-full"
            />
          </div>

          {/* SHIPPING METHOD */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">SHIPPING METHOD</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="shipping" className="text-orange-500 focus:ring-orange-500" />
                Standard Shipping
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="shipping" className="text-orange-500 focus:ring-orange-500" />
                Post Office
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="shipping" className="text-orange-500 focus:ring-orange-500" />
                Pickup
              </label>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">PAYMENT</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                Bank Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                Apple Pay
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="text-orange-500 focus:ring-orange-500" />
                Google Pay
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Card Number"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Name on Card"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="Expiry Date"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
              <input
                placeholder="CVV"
                className="border border-gray-600 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition rounded-md">
            PAY AND PLACE ORDER
          </button>
        </div>

        {/* RIGHT SECTION - ORDER SUMMARY */}
        <div className="w-full lg:w-[35%] space-y-6">
          {/* Product 1 */}
          <div className="flex gap-4 items-start">
            <img
              src="/shirt/shirt2M.jpg"
              alt="Costume Saashi"
              className="w-20 h-32 rounded-md"
            />
            <div>
              <p className="font-semibold">Costume Saashi</p>
              <p className="text-sm">Size: S · Color: Black</p>
              <p className="mt-2 font-semibold">$495.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex gap-4 items-start">
            <img
              src="/shirt/shirt1H.jpg"
              alt="Costume Beth"
              className="w-20 h-32 rounded-md"
            />
            <div>
              <p className="font-semibold">Costume Beth</p>
              <p className="text-sm">Size: M · Color: Black</p>
              <p className="mt-2 font-semibold">$445.00</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-600 pt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$940.00</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between font-semibold border-t border-gray-600 pt-4">
              <p>Total Amount</p>
              <p>$940.00</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;