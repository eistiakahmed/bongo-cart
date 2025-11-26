import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sara Ahmed',
      text: 'Amazing collection! The quality is top-notch and delivery was super fast.',
      rating: 5,
      avatar: 'https://i.ibb.co.com/s9QsW627/Emily-Johnson.jpg',
    },
    {
      name: 'Rafiq Islam',
      text: 'Love the variety and customer service was very helpful.',
      rating: 4,
      avatar: 'https://i.ibb.co.com/C5NLf4sc/michael-l-smith-square.jpg',
    },
    {
      name: 'Nabila Khan',
      text: 'Great fashion items! Will definitely buy again.',
      rating: 5,
      avatar:
        'https://i.ibb.co.com/FLZMCjtc/8595234bc115309b1b3accf0ba07b30e.jpg',
    },
  ];

  return (
    <div className="mt-24 py-16 bg-gray-50 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="font-semibold">{review.name}</h3>
            </div>
            <div className="flex mb-2">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
