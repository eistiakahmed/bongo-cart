import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FiTruck } from 'react-icons/fi';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';

export default function Features() {
  const features = [
    {
      title: 'Premium Quality',
      desc: 'Top-notch fabrics and long-lasting stitches.',
      icon: <MdVerified className="w-12 h-12 text-red-500 mb-4" />,
    },
    {
      title: 'Fast Delivery',
      desc: 'Get your order delivered within 2-3 days.',
      icon: <FiTruck className="w-12 h-12 text-green-500 mb-4" />,
    },
    {
      title: 'Easy Exchange',
      desc: 'Hassle-free 7-day exchange & return.',
      icon: <AiOutlineSwap className="w-12 h-12 text-blue-500 mb-4" />,
    },
    {
      title: 'Secure Payments',
      desc: 'SSL secured and cash-on-delivery availability.',
      icon: <BsShieldCheck className="w-12 h-12 text-yellow-500 mb-4" />,
    },
  ];

  return (
    <div className="mt-24 bg-gray-50 py-16 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Customers Love Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10 px-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-5 flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2"
          >
            {feature.icon}
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
