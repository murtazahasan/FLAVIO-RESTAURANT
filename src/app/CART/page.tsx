import React from "react";

// Sample cart items data
const cartItems = [
  { id: 1, name: "Product 1", price: 10, quantity: 2 },
  { id: 2, name: "Product 2", price: 15, quantity: 1 },
  { id: 3, name: "Product 3", price: 20, quantity: 3 },
];

// Function to calculate total price
const calculateTotal = () => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

function page() {
  return (
    <div className="container mx-auto px-3 mt-10">
      <h1 className="text-4xl font-bold mb-5">Your Shopping Cart</h1>

      {/* Cart items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b-2 py-4"
        >
          <div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
          </div>
          <div className="text-right">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg">
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
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

export default page;
