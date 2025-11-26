import Banner from '@/Components/Banner'
import Features from '@/Components/Features';
import Testimonials from '@/Components/Testimonials';
import Cards from '@/Shared/Card';
import Container from '@/Shared/Container';
import React from 'react'

export default async function Home() {
  const res = await fetch('http://localhost:5000/latest_fashion');
  const initialData = await res.json()
  console.log(initialData)
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
        {/* Features Section */}
        <Features />
        {/* Newsletter Section */}
        <div className="mt-24 bg-red-50 py-16 rounded-xl text-center">
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
        {/* Testimonials Section */}
        <Testimonials />
      </Container>
    </div>
  );
}
