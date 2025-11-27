import SearchProducts from '@/Components/SearchProduct';
import Container from '@/Shared/Container';

import React from 'react';

export default async function AllProductPage() {
  const res = await fetch('https://bongo-cart.vercel.app/fashion', {
    cache: 'no-store',
    });
  const initialData = await res.json();

  return (
    <Container>
      <div className="pb-15">
        <h1 className="text-center text-4xl font-bold">
          All Trending Fashion Products
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 pt-2">
          Discover our premium collection of dresses, co-ord sets, ethnic wear,
          abayas, and party outfits at the best price in Bangladesh. Find the
          perfect fashion for every occasion!
        </p>
        

        
        <SearchProducts initialData={initialData} />
      </div>
    </Container>
  );
}
