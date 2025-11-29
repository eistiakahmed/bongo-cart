import Link from 'next/link';
import React from 'react';
import Button from './Button';

export default function Cards({ data }) {
  const { title, bannerImage, shortDescription, price, _id: id } = data;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="rounded-t-2xl overflow-hidden h-[250px] shrink-0">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-4 flex flex-col grow">
        {/* Title */}
        <h4 className="text-lg font-bold text-center h-[50px]">{title}</h4>

        {/* Short Description */}
        <p className="text-center text-gray-600 text-sm font-medium h-20 mt-2 line-clamp-2 lg:line-clamp-3">
          {shortDescription}
        </p>

        {/* Divider */}
        <div className="border-b border-gray-300 my-3"></div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-2 h-14">
          <span className="font-bold text-lg">${price}</span>
          <Link href={`/products/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
