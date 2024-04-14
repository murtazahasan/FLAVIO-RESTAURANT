"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/provider/redux/cartSlice";
import burgersData from "@/PackageJsonFiles/burgers.json";
import pizzaData from "@/PackageJsonFiles/pizza.json";
import rollsData from "@/PackageJsonFiles/rolls.json";
import desiData from "@/PackageJsonFiles/desi.json";
import beveragesData from "@/PackageJsonFiles/beverages.json";

function Page() {
  const [activeSection, setActiveSection] = useState<string>("");
  const BURGERSRef = useRef<HTMLDivElement>(null);
  const PIZZARef = useRef<HTMLDivElement>(null);
  const ROLLSRef = useRef<HTMLDivElement>(null);
  const DESIRef = useRef<HTMLDivElement>(null);
  const BEVERAGESRef = useRef<HTMLDivElement>(null);

  const scrolltoBURGERS = () => {
    if (BURGERSRef.current) {
      BURGERSRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrolltoPIZZA = () => {
    if (PIZZARef.current) {
      PIZZARef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrolltoROLLS = () => {
    if (ROLLSRef.current) {
      ROLLSRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrolltoDESI = () => {
    if (DESIRef.current) {
      DESIRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrolltoBEVERAGES = () => {
    if (BEVERAGESRef.current) {
      BEVERAGESRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["BURGERS", "PIZZA", "ROLLS", "DESI", "BEVERAGES"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Redux setup
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
      {/* navbar */}
      <div className="py-3 pl-2 sm:pl-20 bg-gray-100 cursor-pointer sticky top-20 z-10">
        <button
          style={{
            backgroundColor: activeSection === "BURGERS" ? "#34D399" : "",
          }}
          className="bg-white font-bold text-center p-2 m-1 rounded-2xl"
          onClick={scrolltoBURGERS}
        >
          BURGERS
        </button>
        <button
          style={{
            backgroundColor: activeSection === "PIZZA" ? "#34D399" : "",
          }}
          className="bg-white font-bold text-center p-2 m-1 rounded-2xl"
          onClick={scrolltoPIZZA}
        >
          PIZZA
        </button>
        <button
          style={{
            backgroundColor: activeSection === "ROLLS" ? "#34D399" : "",
          }}
          className="bg-white font-bold text-center p-2 m-1 rounded-2xl"
          onClick={scrolltoROLLS}
        >
          ROLLS
        </button>
        <button
          style={{ backgroundColor: activeSection === "DESI" ? "#34D399" : "" }}
          className="bg-white font-bold text-center p-2 m-1 rounded-2xl"
          onClick={scrolltoDESI}
        >
          DESI
        </button>
        <button
          style={{
            backgroundColor: activeSection === "BEVERAGES" ? "#34D399" : "",
          }}
          className="bg-white font-bold text-center p-2 m-1 rounded-2xl"
          onClick={scrolltoBEVERAGES}
        >
          BEVERAGES
        </button>
      </div>

      <div className="bg-gray-100">
        {/* BURGERS section */}
        <div
          className="min-h-screen py-8 px-6 sm:px-2"
          id="BURGERS"
          ref={BURGERSRef}
        >
          <div className="container mx-auto">
            <h1 className="text-3xl ml-3 font-bold mb-6">
              <span className="border-b-4 border-green-400">BURG</span>ERS
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {burgersData.map((product: any, index: number) => (
                <div
                  className="bg-white rounded-xl shadow-md p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  key={index}
                >
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-40  object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <h4 className="text-gray-800 font-semibold">
                      {product.price}
                    </h4>
                    {isItemInCart(product.id) ? (
                      <button
                        className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-900"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <IoRemoveCircleOutline className="mr-2" /> Remove from
                        Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                        onClick={() => handleAddToCart(product)}
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

        {/* PIZZA section */}
        <div
          className="min-h-screen py-8 px-6 sm:px-2"
          id="PIZZA"
          ref={PIZZARef}
        >
          <div className="container mx-auto" style={{ paddingTop: "25vh" }}>
            <h1 className="text-3xl ml-3 font-bold mb-6">
              <span className="border-b-4 border-green-400">PIZ</span>ZA
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {pizzaData.map((product: any, index: number) => (
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
                      {product.price}
                    </h4>
                    {isItemInCart(product.id) ? (
                      <button
                        className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-900"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <IoRemoveCircleOutline className="mr-2" /> Remove from
                        Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                        onClick={() => handleAddToCart(product)}
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

        {/* ROLLS section */}
        <div
          className="min-h-screen py-8 px-6 sm:px-2"
          id="ROLLS"
          ref={ROLLSRef}
        >
          <div className="container mx-auto" style={{ paddingTop: "25vh" }}>
            <h1 className="text-3xl ml-3 font-bold mb-6">
              <span className="border-b-4 border-green-400">ROL</span>LS
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {rollsData.map((product: any, index: number) => (
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
                      {product.price}
                    </h4>
                    {isItemInCart(product.id) ? (
                      <button
                        className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-900"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <IoRemoveCircleOutline className="mr-2" /> Remove from
                        Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                        onClick={() => handleAddToCart(product)}
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

        {/* DESI section */}
        <div className="min-h-screen py-8 px-6 sm:px-2" id="DESI" ref={DESIRef}>
          <div className="container mx-auto" style={{ paddingTop: "25vh" }}>
            <h1 className="text-3xl ml-3 font-bold mb-6">
              <span className="border-b-4 border-green-400">DES</span>I
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {desiData.map((product: any, index: number) => (
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
                      {product.price}
                    </h4>
                    {isItemInCart(product.id) ? (
                      <button
                        className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-900"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <IoRemoveCircleOutline className="mr-2" /> Remove from
                        Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                        onClick={() => handleAddToCart(product)}
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

        {/* BEVERAGES section */}
        <div
          className="min-h-screen py-8 px-6 sm:px-2"
          id="BEVERAGES"
          ref={BEVERAGESRef}
        >
          <div className="container mx-auto" style={{ paddingTop: "25vh" }}>
            <h1 className="text-3xl ml-3 font-bold mb-6">
              <span className="border-b-4 border-green-400">BEVERA</span>GES
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {beveragesData.map((product: any, index: number) => (
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
                      {product.price}
                    </h4>
                    {isItemInCart(product.id) ? (
                      <button
                        className="bg-red-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-red-900"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <IoRemoveCircleOutline className="mr-2" /> Remove from
                        Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 text-white py-2 my-2 px-4 flex items-center justify-center rounded-b-xl hover:bg-green-900"
                        onClick={() => handleAddToCart(product)}
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
      </div>
    </>
  );
}

export default Page;
