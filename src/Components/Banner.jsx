import Link from 'next/link';
import React from 'react';

export default function Banner() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16 md:py-20 gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Elevate Your Style
            <br />
            This Season
          </h1>

          <p className="text-gray-600 mt-4 mb-6 sm:mb-8 lg:text-lg max-w-lg mx-auto md:mx-0">
            Discover exclusive collections of modern fashion wear. Trendy
            outfits crafted for comfort and elegance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-4xl hover:bg-red-800 transition-transform hover:scale-105 duration-200 text-center"
            >
              Shop Now
            </Link>

            <button className="border border-red-500 text-red-500 font-semibold px-6 py-3 rounded-4xl hover:bg-red-500 hover:text-white transition-transform hover:scale-105 duration-200 text-center">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://i.ibb.co/9kx5bfK7/COS063-01-251884a0-e7de-4392-a55b-f6f9c226f153.webp"
            alt="Fashion Banner"
            className="rounded-lg shadow-lg object-cover w-full max-w-md transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
