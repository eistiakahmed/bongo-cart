'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '@/Context/AuthContext';
import { useRouter } from 'next/navigation';
import { updateProfile } from 'firebase/auth';

export default function RegisterPage() {
  const { createUser, googleSignIn} =
    useContext(AuthContext);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error('Password must include 1 uppercase, 1 lowercase & 6+ chars.');
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: name, photoURL: image })
          .then(() => {
            toast.success('Account created successfully!');
            router.push('/');
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleRegister = async () => {
    try {
      await googleSignIn();
      toast.success('Google Registration Successful!');
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="font-semibold mb-1 block">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="font-semibold mb-1 block">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="font-semibold mb-1 block">Image URL</label>
            <input
              name="image"
              type="text"
              placeholder="Paste your profile image link"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="font-semibold mb-1 block">Password</label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              className="checkbox checkbox-sm"
            />
            <span>Show Password</span>
          </div>

          <button className="btn bg-red-500 hover:bg-red-600 text-white w-full mt-4">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline w-full flex items-center gap-3"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link href="/login" className="text-red-500 font-semibold ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
