import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <footer className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Bongo
            <span className="text-red-400">Cart</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Your one-stop fashion destination! Latest trends, top-quality
            products, and fast delivery.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="hover:text-red-400 cursor-pointer" />
            <FaInstagram className="hover:text-red-400 cursor-pointer" />
            <FaTwitter className="hover:text-red-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>

        
        <div>
          <h6 className="font-bold mb-4">Shop</h6>
          <a className="block link-hover mb-2">Men</a>
          <a className="block link-hover mb-2">Women</a>
          <a className="block link-hover mb-2">Kids</a>
          <a className="block link-hover mb-2">Accessories</a>
        </div>

        
        <div>
          <h6 className="font-bold mb-4">Customer Service</h6>
          <a className="block link-hover mb-2">Help Center</a>
          <a className="block link-hover mb-2">Track Order</a>
          <a className="block link-hover mb-2">Returns</a>
          <a className="block link-hover mb-2">Shipping Info</a>
        </div>

        
        <div>
          <h6 className="font-bold mb-4">Company</h6>
          <a className="block link-hover mb-2">About Us</a>
          <a className="block link-hover mb-2">Careers</a>
          <a className="block link-hover mb-2">Press</a>
          <a className="block link-hover mb-2">Privacy Policy</a>
        </div>
      </footer>

      
      <div className="text-center py-6 border-t border-gray-700 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BongoCart. All rights reserved.
      </div>
    </div>
  );
}
