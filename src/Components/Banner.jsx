import Link from 'next/link';
import React from 'react';

export default function Banner() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-20 gap-10">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Elevate Your Style
            <br />
            This Season
          </h1>

          <p className="text-lg text-gray-600 mt-4 mb-8 max-w-md">
            Discover exclusive collections of modern fashion wear. Trendy
            outfits crafted for comfort and elegance.
          </p>

          <div className="flex gap-4">
            <Link href='/products' className="bg-red-500 text-white font-semibold px-6 py-3 rounded-4xl hover:bg-red-800 transition">
              Shop Now
            </Link>

            <button className="border border-red-500 text-red-500 font-semibold px-6 py-3 rounded-4xl hover:bg-red-500 hover:text-white transition">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/9kx5bfK7/COS063-01-251884a0-e7de-4392-a55b-f6f9c226f153.webp"
            alt="Fashion Banner"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
