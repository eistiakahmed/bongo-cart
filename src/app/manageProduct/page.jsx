'use client';

import { AuthContext } from '@/Context/AuthContext';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import Container from '@/Shared/Container';
import React, { useContext, useState } from 'react';

export default function ManageProductPage() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [products, setProducts] = useState([]);
  

  return (
    <Container>
      <div className="overflow-x-auto bg-white p-4 rounded-md shadow-md">
        <table className="table">
          <thead>
            <tr className="text-lg font-semibold">
              <th>SL No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>

              <td></td>

              <td></td>
              <td></td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
