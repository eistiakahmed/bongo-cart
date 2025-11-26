import Container from '@/Shared/Container';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function ProductDetails({ params }) {
  const { details } = await params;
  const res = await fetch(`http://localhost:5000/fashion/${details}`);
  const data = await res.json();

  const {
    title,
    bannerImage,
    shortDescription,
    fullDescription,
    category,
    brand,
    price,
    stockStatus,
    material,
    washCare,
    origin,
    returnPolicy,
    productCode,
    dateAdded,
    email
  } = data;

  const currency = 'USD';

  return (
    <Container>
      {/* Back Button */}
      <div className="pt-6 pb-3">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-10 py-12 px-6 md:px-12 bg-white rounded-xl">
        {/* IMAGE */}
        <div className="">
          <div className="relative overflow-hidden rounded-xl group cursor-zoom-in">
            <img
              src={bannerImage}
              alt={title}
              className="w-full h-auto lg:h-auto transition-transform duration-2000 ease-out group-hover:scale-150"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              {title}
            </h2>
            <p className="text-gray-600 mt-3 text-lg leading-relaxed">
              {shortDescription}
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-black tracking-wide flex items-center gap-2">
              <span>${price}</span>
              <span className="text-lg text-gray-600 font-semibold">
                {currency}
              </span>
            </p>
          </div>

          <div>
            <button className="px-7 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all">
              Buy Now
            </button>
          </div>

          <div className="bg-red-50 border border-red-500 rounded-xl p-6 text-gray-700 text-base md:text-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              <p className="font-medium">Brand:</p> <p>{brand}</p>
              <p className="font-medium">Category:</p> <p>{category}</p>
              <p className="font-medium">Stock:</p>
              <p className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${
                    stockStatus === 'In Stock' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                {stockStatus}
              </p>
              <p className="font-medium">Material:</p> <p>{material}</p>
              <p className="font-medium">Wash Care:</p> <p>{washCare}</p>
              <p className="font-medium">Origin:</p> <p>{origin}</p>
              <p className="font-medium">Return Policy:</p>{' '}
              <p>{returnPolicy}</p>
              <p className="font-medium">Product Code:</p> <p>{productCode}</p>
              <p className="font-medium">Date Added:</p> <p>{dateAdded}</p>
              <p className="font-medium">Email:</p> <p>{email}</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed border-t pt-5">
            {fullDescription}
          </p>
        </div>
      </div>
    </Container>
  );
}
