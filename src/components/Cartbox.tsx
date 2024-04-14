'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/provider/redux/RootState";
import Link from 'next/link';

function Cartbox() {
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <div className="fixed top-56 right-1  z-50">
      <div className="bg-white rounded-lg shadow-lg">
        <Link href="/CART">
          <img src="28.png" alt="no" className="w-9 h-9" />
        </Link>

        {/* Cart count */}
        <span className=" bg-slate-800 text-white text-center w-4 h-4 text-xs absolute top-0 right-0 -mt-2 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      </div>
    </div>
  );
}

export default Cartbox;
