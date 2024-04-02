"use client";

// Import necessary modules and types
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Define the type for MenuCard props
type MenuCardProps = {
  imageSrc: string;
  title: string;
  link: string;
};

// Use the MenuCardProps type for the props of the MenuCard component
const MenuCard: React.FC<MenuCardProps> = ({ imageSrc, title, link }) => {
  return (
    <Link href={link} className="block w-full h-full">
      <div className="relative w-full aspect-w-1 aspect-h-1 overflow-hidden bg-black">
        <img
          src={imageSrc}
          alt="Menu Item"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

// Define the Sliderss component
const Sliderss: React.FC = () => {
  // Define menuItems array with type MenuCardProps[]
  const menuItems: MenuCardProps[] = [
    { imageSrc: "/b6.png", title: "Item 1", link: "/" },
    { imageSrc: "/p5.png", title: "Item 2", link: "/CONTACT" },
    { imageSrc: "/r4.png", title: "Item 3", link: "/item3" },
    { imageSrc: "/d1.png", title: "Item 4", link: "/item4" },
    { imageSrc: "/w1.png", title: "Item 5", link: "/item5" },
  ];

  // Define settings object
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false, // Hide arrows on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl  ml-3 font-bold  mb-9">
          {" "}
          <span className=" border-b-4 border-green-400">EXPLO</span>RE MENU
        </h1>
        <div className="relative">
          <Slider {...settings}>
            {menuItems.map((menuItem, index) => (
              <div key={index} className="px-4">
                <MenuCard {...menuItem} />
              </div>
            ))}
          </Slider>
          <style jsx global>{`
            .slick-prev,
            .slick-next {
              display: none; // Hide slider controls globally
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Sliderss;
