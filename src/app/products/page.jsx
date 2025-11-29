'use client';

import React, { useEffect, useState } from 'react';
import SearchProducts from '@/Components/SearchProduct';
import Container from '@/Shared/Container';
import axios from 'axios';
import useAxiosSecure from '@/hooks/useAxiosSecure';

export default function AllProductPage() {
  const [initialData, setInitialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosSecure.get('/fashion');
        setInitialData(res.data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [axiosSecure]);

  if (loading) {
    return (
      <Container>
        <p className="text-center py-10 text-gray-500">Loading products...</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="pb-16">
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
