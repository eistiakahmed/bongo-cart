'use client';
import Banner from '@/Components/Banner';
import Features from '@/Components/Features';
import Testimonials from '@/Components/Testimonials';
import Cards from '@/Shared/Card';
import Container from '@/Shared/Container';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch('https://bongo-cart.vercel.app/latest_fashion')
      .then((res) => res.json())
      .then((data) => setInitialData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Banner />
      <Container>
        <div>
          <h1 className="text-center font-bold text-4xl mt-16">
            Our Most Trending Collection
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {initialData.map((data) => (
              <Cards key={data._id} data={data} />
            ))}
          </div>
        </div>

        <Features />

        <div className="mt-24 bg-red-50 py-16 rounded-xl text-center px-7">
          <h2 className="text-3xl font-bold mb-4">
            Get Exclusive Fashion Offers
          </h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter and receive 10% off your first order!
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded border border-gray-300 w-full sm:w-auto flex-1 focus:outline-none"
            />
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
              Subscribe
            </button>
          </form>
        </div>

        <Testimonials />
      </Container>
    </div>
  );
}
