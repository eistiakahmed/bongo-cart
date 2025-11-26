'use client';

import React, { useEffect, useState } from 'react';
import Cards from '@/Shared/Card';

export default function SearchProducts({ initialData }) {
  const [products, setProducts] = useState(initialData || []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const search_text = e.target.search.value.trim();

    if (!search_text) {
      setProducts(initialData || []);
      return;
    }

    try {
      const res = await fetch(
        `https://bongo-cart.vercel.app/searchName?search=${encodeURIComponent(
          search_text
        )}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.error('Error fetching search results:', error);

      setProducts([]);
    }
  };

  return (
    <div className="mb-12 text-center">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
      >
        <input
          name="search"
          type="text"
          placeholder="Search by name..."
          className="w-full sm:w-80 border border-red-300 bg-gray-50 text-red-700 py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="border-2 buttonStyle border-red-600 text-red-500 font-semibold rounded-full px-8 py-3 hover:bg-red-600 hover:text-white transition duration-300"
        >
          Search
        </button>
      </form>

      {products.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <Cards key={product._id} data={product} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-red-600 font-semibold mt-10">
          No Product Found!
        </p>
      )}
    </div>
  );
}
