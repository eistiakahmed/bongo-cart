'use client';

import { AuthContext } from '@/Context/AuthContext';
import Button from '@/Shared/Button';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleUser = () => {
    logOut()
      .then(() => {
        toast.success('Logout Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">All Products</Link>
      </li>
      <li>
        <Link href="/addProducts">Add Product</Link>
      </li>
      <li>
        <Link href="/manageProduct">Manage Product</Link>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md border-b border-gray-300">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-2xl">
            Bongo<span className="text-red-400">Cart</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="relative flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt="User"
                referrerPolicy="no-referrer"
                className="w-[45px] h-[45px] rounded-full border object-cover cursor-pointer"
                onClick={() => setShowUserInfo(!showUserInfo)}
              />
              {showUserInfo && (
                <div className="absolute right-0 top-14 w-56 bg-white shadow-md rounded-lg p-3 text-sm z-20">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-gray-600 break-all">{user.email}</p>
                </div>
              )}
              <button
                onClick={handleUser}
                className="btn rounded-4xl bg-red-500 text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
