'use client';

import { AuthContext } from '@/Context/AuthContext';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function AddProductPage() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  // console.log(user?.email)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatData = {
      title: e.target.title.value,
      bannerImage: e.target.bannerImage.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      category: e.target.category.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      stockStatus: 'In Stock',
      material: e.target.material.value,
      washCare: e.target.washCare.value,
      origin: e.target.origin.value,
      returnPolicy:
        'Eligible for 7-day return if unused with original packaging',
      productCode: e.target.productCode.value,
      dateAdded: e.target.dateAdded.value,
      email: e.target.email.value,
    };

    try {
      const res = await axiosSecure.post('/fashion', formatData);
      console.log(res.data);
      toast.success('Product Added Successfully');
      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to add product');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white my-10 rounded-4xl">
      <Toaster />
      <h1 className="text-4xl font-bold mb-4 text-center">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Banner Image URL:</label>
          <input
            type="text"
            name="bannerImage"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Short Description:</label>
          <input
            type="text"
            name="shortDescription"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Full Description:</label>
          <textarea
            name="fullDescription"
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>
        <div>
          <label className="block font-medium">Category:</label>
          <input
            type="text"
            name="category"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Brand:</label>
          <input
            type="text"
            name="brand"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Material:</label>
          <input
            type="text"
            name="material"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Wash Care:</label>
          <input
            type="text"
            name="washCare"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Origin:</label>
          <input
            type="text"
            name="origin"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Product Code:</label>
          <input
            type="text"
            name="productCode"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Date Added:</label>
          <input
            type="date"
            name="dateAdded"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 w-full rounded-4xl font-bold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
