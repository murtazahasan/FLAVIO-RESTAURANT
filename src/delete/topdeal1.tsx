import React from "react";
import Link from "next/link";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/provider/redux/cartSlice";
import topdealsData from "@/PackageJsonFiles/topDeals.json";
import bestsellersData from "@/PackageJsonFiles/bestSellers.json";

function TopDeals() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const handleAddToCart = (product: any) => {
    const { id, title, price, imgSrc, description } = product;
    const item = { id, name: title, price, imgSrc, description, quantity: 1 };
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const isItemInCart = (id: number) => {
    return cartItems.some((item: any) => item.id === id);
  };

  return (
    <>
      {/* top deals */}
      <div className="bg-gray-100 min-h-screen py-8 px-6 sm:px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl ml-3 font-bold mb-6">
            <span className=" border-b-4 border-green-400">TOP D</span>EALS
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {topdealsData.map((product, index) => (
              <div
                className="bg-white rounded-xl shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                key={index}
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <h4 className="text-gray-800 font-semibold">
                    RS {product.price}
                  </h4>
                  {isItemInCart(product.id) ? (
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-600"
                    >
                      <IoRemoveCircleOutline className="mr-2" /> Remove from
                      Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                    >
                      <IoAddCircleOutline className="mr-2" /> Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* best sellers */}
      <div className="bg-gray-100 min-h-screen py-8 px-6 sm:px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl ml-3 font-bold mb-6">
            <span className="border-b-4 border-green-400">BEST S</span>ELLERS
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {bestsellersData.map((product, index) => (
              <div
                className="bg-white rounded-xl shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                key={index}
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <h4 className="text-gray-800 font-semibold">
                    RS {product.price}
                  </h4>
                  {isItemInCart(product.id) ? (
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-600"
                    >
                      <IoRemoveCircleOutline className="mr-2" /> Remove from
                      Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                    >
                      <IoAddCircleOutline className="mr-2" /> Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* download app section */}
      <div className="bg-slate-100">
        <div className="container mx-auto pb-8">
          <div
            className="flex flex-col lg:flex-row items-center justify-center rounded-xl bg-cover bg-center relative"
            style={{ backgroundImage: `url("bghai2.jpg")`, minHeight: "300px" }}
          >
            <div className="text-center lg:text-left lg:pl-16">
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <img
                  className="w-40 rounded-2xl  sm:w-48 h-auto m-1 lg:mr-4"
                  src="mobile.png"
                  alt="Mobile Screen"
                />
                <div>
                  <h2 className="text-2xl sm:text-4xl  font-extrabold mt-4 lg:mt-0">
                    Download our app
                  </h2>

                  <div className=" mt-4 flex">
                    <Link href="/">
                      <img
                        className="w-28 sm:w-36 h-auto mr-4"
                        src="play_store.png"
                        alt="Play Store"
                      />
                    </Link>
                    <Link href="/">
                      <img
                        className="w-28 sm:w-36 h-auto"
                        src="app_store.png"
                        alt="App Store"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopDeals;
