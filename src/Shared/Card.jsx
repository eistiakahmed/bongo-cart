import Link from 'next/link';
import React from 'react';
import Button from './Button';

export default function Cards({ data }) {
  console.log(data);
  const { title, bannerImage, shortDescription, price, _id: id } = data;

  return (
    <div className="bg-white rounded-2xl hover:scale-105 transition-all duration-200">
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src={bannerImage}
          alt=""
          className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="px-4 py-2">
        <h4 className="text-lg font-bold text-center mt-3 h-[30px] line-clamp-2">
          {title}
        </h4>
        <p className="text-center h-[50px] text-gray-600 font-medium text-sm">
          {shortDescription}
        </p>
        <div className=" flex justify-between items-center md:h-14 lg:h-16">
          <span className="font-bold">${price}</span>
          <span className="hover:scale-x-105 transition-all duration-200">
            <Link href={`/products/${id}`}>
              <Button>View Details</Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
