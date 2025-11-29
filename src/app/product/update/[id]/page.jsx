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
      try {
        const res = await axiosSecure.get(`/fashion/${id}`);
        setProduct(res.data);
      } catch (err) {
        toast.error('Failed to load product data');
      }
    };
    getProduct();
  }, [id, axiosSecure]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedData = {
      title: formData.get('title'),
      bannerImage: formData.get('bannerImage'),
      shortDescription: formData.get('shortDescription'),
      fullDescription: formData.get('fullDescription'),
      category: formData.get('category'),
      brand: formData.get('brand'),
      price: formData.get('price'),
      stockStatus: formData.get('stockStatus'),
      material: formData.get('material'),
      washCare: formData.get('washCare'),
      origin: formData.get('origin'),
      returnPolicy: formData.get('returnPolicy'),
      productCode: formData.get('productCode'),
      dateAdded: formData.get('dateAdded'),
      email: formData.get('email'),
    };

    try {
      await axiosSecure.put(`/product/${id}`, updatedData);
      toast.success('Product Updated Successfully');
    } catch (err) {
      toast.error('Failed to Update Product');
    }
  };

  if (!product)
    return (
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white my-10 rounded-4xl">
      <Toaster />
      <h1 className="text-4xl font-bold mb-4 text-center">Update Product</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Banner Image */}
        <div>
          <label className="block font-medium">Banner Image URL:</label>
          <input
            type="text"
            name="bannerImage"
            defaultValue={product.bannerImage}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-medium">Short Description:</label>
          <input
            type="text"
            name="shortDescription"
            defaultValue={product.shortDescription}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block font-medium">Full Description:</label>
          <textarea
            name="fullDescription"
            defaultValue={product.fullDescription}
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>

        {/* Category */}
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

        {/* Brand */}
        <div>
          <label className="block font-medium">Brand:</label>
          <input
            type="text"
            name="brand"
            defaultValue={product.brand}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Material */}
        <div>
          <label className="block font-medium">Material:</label>
          <input
            type="text"
            name="material"
            defaultValue={product.material}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Wash Care */}
        <div>
          <label className="block font-medium">Wash Care:</label>
          <input
            type="text"
            name="washCare"
            defaultValue={product.washCare}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Origin */}
        <div>
          <label className="block font-medium">Origin:</label>
          <input
            type="text"
            name="origin"
            defaultValue={product.origin}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Return Policy */}
        <div>
          <label className="block font-medium">Return Policy:</label>
          <input
            type="text"
            name="returnPolicy"
            defaultValue={product.returnPolicy}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Product Code */}
        <div>
          <label className="block font-medium">Product Code:</label>
          <input
            type="text"
            name="productCode"
            defaultValue={product.productCode}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Date Added */}
        <div>
          <label className="block font-medium">Date Added:</label>
          <input
            type="date"
            name="dateAdded"
            defaultValue={product.dateAdded}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={product.email || user?.email}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 w-full rounded-4xl font-bold btn"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
