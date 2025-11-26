'use client';

import React, { useEffect, useState } from 'react';
import Cards from '@/Shared/Card';

export default function SearchProducts({ initialData }) {
  // console.log(initialData); // Keep for debugging if needed

  // Initialize state with initialData or an empty array if initialData is null/undefined
  const [products, setProducts] = useState(initialData || []);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Get the search text and trim any leading/trailing whitespace
    const search_text = e.target.search.value.trim();

    // If the search field is empty, reset products to the initial data
    if (!search_text) {
      setProducts(initialData || []); // Ensure it handles null initialData gracefully
      return;
    }

    try {
      // 🚀 Fetch data from the server's search endpoint
      const res = await fetch(
        `http://localhost:5000/searchName?search=${encodeURIComponent(
          search_text
        )}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      // 🌟 Use the data returned by the server directly.
      // The server is expected to handle partial/relevant matching.
      setProducts(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Optionally, set products to an empty array on error
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
          className="w-full sm:w-80 border border-gray-300 bg-gray-50 text-gray-700 py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#092052]"
        />

        <button
          type="submit"
          className="border-2 buttonStyle border-[#092052] text-[#092052] font-semibold rounded-full px-8 py-3 hover:bg-[#092052] hover:text-white transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering for products or "No Product Found" message */}
      {products.length > 0 ? (
        // Show Products in a grid
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <Cards key={product._id} data={product} />
          ))}
        </div>
      ) : (
        // ❌ Show "No Product Found!" outside the grid for full-width display
        <p className="text-xl text-red-600 font-semibold mt-10">
          No Product Found!
        </p>
      )}
    </div>
  );
}
