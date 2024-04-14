'use client'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/provider/redux/RootState";
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from "@/provider/redux/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseItemQuantity(id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto px-3 mt-10">
      <h1 className="text-4xl font-bold mb-5">Your Shopping Cart</h1>

      {/* Cart items */}
      {cartItems.map((item: any) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b-2 py-4"
        >
          <div>
            <img src={item.imgSrc} alt={item.name} className="w-24 h-auto mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2> {/* Use title instead of name */}
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">Price: RS{item.price}</p>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-2 py-1 rounded-lg mr-2"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-2 py-1 rounded-lg ml-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          Total: RS{calculateTotalPrice()}
        </h2>
      </div>

      {/* Checkout button */}
      <div className="mt-8 mb-4 text-right">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
