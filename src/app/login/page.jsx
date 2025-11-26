'use client';
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInUser(email, password);
      toast.success('Login successful!');
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      toast.success('Google login successful!');
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-red-500">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              className="checkbox checkbox-sm"
            />
            <span>Show Password</span>
          </div>

          <button
            disabled={loading}
            className="btn bg-red-500 hover:bg-red-600 text-white w-full"
          >
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="btn btn-outline w-full flex items-center gap-3"
        >
          <FcGoogle size={22} /> Login with Google
        </button>

        <p className="text-center text-sm mt-2">
          Don’t have an account?
          <Link href="/register" className="text-red-500 font-semibold ml-1">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
