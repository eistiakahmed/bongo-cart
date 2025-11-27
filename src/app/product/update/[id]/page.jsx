'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/Context/AuthContext';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '@/Components/Spinner';

export default function UpdateProductPage() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);

  // Load existing product data
  useEffect(() => {
    const getProduct = async () => {
      const res = await axiosSecure.get(`/fashion/${id}`);
      setProduct(res.data);
    };
    getProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = {
      title: e.target.title.value,
      bannerImage: e.target.bannerImage.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      category: e.target.category.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      stockStatus: e.target.stockStatus.value,
      material: e.target.material.value,
      washCare: e.target.washCare.value,
      origin: e.target.origin.value,
      returnPolicy: e.target.returnPolicy.value,
      productCode: e.target.productCode.value,
      dateAdded: e.target.dateAdded.value,
      email: e.target.email.value,
    };

    try {
      await axiosSecure.put(`/product/${id}`, updatedData);
      toast.success('Product Updated Successfully');
    } catch (err) {
      toast.error('Failed to Update Product');
    }
  };

  if (!product) return <p className="flex justify-center mt-10"><Spinner /></p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white my-10 rounded-4xl">
      <Toaster />
      <h1 className="text-4xl font-bold mb-4 text-center">Update Product</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Banner Image URL:</label>
          <input
            type="text"
            name="bannerImage"
            defaultValue={product.bannerImage}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Short Description:</label>
          <input
            type="text"
            name="shortDescription"
            defaultValue={product.shortDescription}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Full Description:</label>
          <textarea
            name="fullDescription"
            defaultValue={product.fullDescription}
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category:</label>
          <select
            name="category"
            defaultValue={product.category}
            className="w-full border p-2 rounded bg-white"
          >
            <option value="saree">Saree</option>
            <option value="kurti">Kurti</option>
            <option value="lehenga">Lehenga</option>
            <option value="salwar">Salwar</option>
            <option value="gown">Gown</option>
            <option value="blouse">Blouse</option>
            <option value="dupattas">Dupattas</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Brand:</label>
          <input
            type="text"
            name="brand"
            defaultValue={product.brand}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Material:</label>
          <input
            type="text"
            name="material"
            defaultValue={product.material}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Wash Care:</label>
          <input
            type="text"
            name="washCare"
            defaultValue={product.washCare}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Origin:</label>
          <input
            type="text"
            name="origin"
            defaultValue={product.origin}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Return Policy:</label>
          <input
            type="text"
            name="returnPolicy"
            defaultValue={product.returnPolicy}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Product Code:</label>
          <input
            type="text"
            name="productCode"
            defaultValue={product.productCode}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Date Added:</label>
          <input
            type="date"
            name="dateAdded"
            defaultValue={product.dateAdded}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={product.email || user?.email}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 w-full rounded-4xl font-bold"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
