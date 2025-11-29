'use client';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/Context/AuthContext';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { FaEdit, FaEye } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import Container from '@/Shared/Container';
import toast, { Toaster } from 'react-hot-toast';
import ProtectedRoute from '@/Components/ProtectedRoute';

export default function ManageProductPage() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/addProducts?email=${user.email}`);
        console.log('Fetched products:', res.data);
        setProducts(res.data);
      } catch (err) {
        console.error('Fetch error:', err);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user, axiosSecure]);

  if (loading) {
    return (
      <Container>
        <p className="text-center text-gray-500 py-10 text-lg">
          Loading products...
        </p>
      </Container>
    );
  }

  return (
    <ProtectedRoute>
      <Container>
        <Toaster />
        <h1 className="text-4xl font-extrabold text-center mb-8 text-black">
          Total Products: {products.length}
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                <th className="px-4 py-3 text-center">Sel No</th>
                <th className="px-4 py-3 text-center">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-center">Category</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {products.length > 0 ? (
                products.map((p, i) => (
                  <tr
                    key={p._id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-center">{i + 1}</td>

                    <td className="px-4 py-3 flex justify-center">
                      <img
                        src={p.bannerImage}
                        alt={p.title}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-md"
                      />
                    </td>

                    <td className="px-4 py-3">{p.title}</td>
                    <td className="px-4 py-3">{p.email}</td>

                    <td className="px-4 py-3 text-center">{p.category}</td>

                    <td className="px-4 py-3 text-center font-semibold">
                      ${p.price}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() =>
                            router.push(`/product/update/${p._id}`)
                          }
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-4xl hover:scale-105 transition duration-200"
                        >
                          <FaEdit className="text-blue-600" size={20} />
                        </button>

                        <button
                          onClick={() => router.push(`/products/${p._id}`)}
                          className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-4xl hover:scale-105 transition duration-200"
                        >
                          <FaEye className="text-yellow-600" size={20} />
                        </button>

                        <button
                          onClick={async () => {
                            if (!confirm('Delete this product?')) return;
                            try {
                              await axiosSecure.delete(`/product/${p._id}`);
                              setProducts(
                                products.filter((prod) => prod._id !== p._id)
                              );
                              toast.success('Deleted successfully');
                            } catch (err) {
                              console.error('Delete error:', err);
                              toast.error('Delete failed');
                            }
                          }}
                          className="p-2 bg-red-100 hover:bg-red-200 rounded-4xl hover:scale-105 transition duration-200"
                        >
                          <RiDeleteBin5Line
                            className="text-red-600"
                            size={20}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </ProtectedRoute>
  );
}
