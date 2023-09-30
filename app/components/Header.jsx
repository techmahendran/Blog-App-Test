"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // navBtn
  const navBtn = () => {
    setIsActive(!isActive);
  };

  const navBtnClick = () => {
    setIsActive(!isActive);
  };

  const sampleTest = () => {
    alert("My Sample Test in next js see my link Blog Link...");
  };

  return (
    <>
      <header className="flex justify-between items-center h-20">
        <Link href="/">
          <h1 className="text-4xl text-center text-text-color">My Blog</h1>
        </Link>

        <nav>
          <ul className="md:flex hidden justify-between space-x-6">
            <li>
              <Link
                className=" text-white  hover:text-[blue] transition-all duration-150"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" text-white  hover:text-[blue] transition-all duration-150"
                href="/skill"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className=" text-white  hover:text-[blue] transition-all duration-150"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={sampleTest}
                className=" text-white bg-sky-500 hover:scale-[1.1] ease-out duration-200 text-[15px] px-2 py-1 rounded-lg"
              >
                My Sample
              </button>
            </li>
          </ul>
        </nav>

        <div
          id="barIcon"
          className="text-[25px] cursor-pointer md:hidden relative"
          onClick={navBtn}
        >
          {isActive ? (
            <AiOutlineClose className="absolute z-10 text-white md:text-black -top-3 sm:right-2 right-2" />
          ) : (
            <AiOutlineMenu className="absolute z-50 text-white -top-3 sm:right-2 right-2 md:text-black" />
          )}
        </div>

        <div
          id="navBar"
          className={
            isActive
              ? "fixed left-0 top-0 z-10 w-[350px] md:w-[450px] h-full bg-black p-2 text-white ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <Link href="/">
            <h1 className="text-4xl text-center text-text-color mt-5">
              My Blog
            </h1>
          </Link>
          <ul className="pt-12">
            <li className="p-3 border-b border-b-gray-400">
              <Link
                className=" w-full inline-block hover:text-text-color"
                href="/"
                onClick={navBtnClick}
              >
                Home
              </Link>
            </li>
            <li className="p-3 border-b border-b-gray-400">
              <Link
                className=" w-full inline-block hover:text-text-color"
                href="/skill"
                onClick={navBtnClick}
              >
                Skills
              </Link>
            </li>
            <li className="p-3 border-b border-b-gray-400">
              <Link
                className=" w-full inline-block hover:text-text-color"
                href="/about"
                onClick={navBtnClick}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
