"use client";
import Link from "next/link";
import { useState } from "react";

const MENU_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Menu",
    href: "/MENU",
  },
  {
    text: "About",
    href: "/ABOUT",
  },
  {
    text: "Contact",
    href: "/CONTACT",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-cover bg-center sticky top-0 z-10" style={{backgroundImage: `url('navbg.jpg')`}}>
      <div className="flex px-5 items-center flex-no-shrink">
        <Link href="/">
          <img className="h-20   w-auto" src="loogo.png" alt="no" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-green hover:border-green"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm  ml-3 lg:flex-grow">
          {MENU_LIST.map(({ text, href }) => (
            <Link key={text} href={href}>
              <span className="block mt-4 text-xl  font-bold lg:inline-block lg:mt-0 text-black  hover:text-green-600 hover:bg-slate-100 mr-5">
                {text}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Link href="/">
            <img src="28.png" alt="no" />
          </Link>

          <Link
            href="/sign-up"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-light hover:bg-white mt-4 lg:mt-0"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
