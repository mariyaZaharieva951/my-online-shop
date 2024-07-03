"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "@/components/layouts/LanguageSwitcher";
import Search from "@/components/layouts/Search";
import Likes from "@/components/layouts/Likes";
import Cart from "@/components/layouts/Cart";
import Account from "@/components/layouts/Account";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleClose() {
    setIsOpen(false);
  }

  const username = "Ivan Todorov";

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  const itemCount = 5;

  return (
    <div className="mb-[30px]">
      <div className="lg:w-[1190px] max-w-screen mx-auto mt-3">
        <div className="flex font-rubik max-w-screen justify-between w-[380px] lg:w-full lg:gap-0">
          <div className="lg:flex hidden gap-3">
            <Link href="https://www.facebook.com" passHref>
              <FontAwesomeIcon
                icon={faFacebook}
                size="20px"
                className="text-gray"
              />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FontAwesomeIcon
                icon={faTwitter}
                size="20px"
                className="text-gray"
              />
            </Link>
            <Link href="https://www.youtube.com" passHref>
              <FontAwesomeIcon
                icon={faYoutube}
                size="20px"
                className="text-gray"
              />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <FontAwesomeIcon
                icon={faInstagram}
                size="20px"
                className="text-gray"
              />
            </Link>
          </div>
          <div className="lg:flex justify-between lg:gap-3">
            <div className="hidden lg:block text-gray lg:text-base text-sm cursor-pointer hover:bg-gray-light rounded">
              Order tracking
            </div>
            <div className="hidden lg:block text-gray lg:text-base text-sm cursor-pointer hover:bg-gray-light rounded">
              Help
            </div>
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <div className="lg:flex flex-row justify-between items-center mt-2">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-[28px] font-bold">STORE</Link>
            
            <button
              onClick={toggleMenu}
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className="lg:hidden inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:block">
            <Search />
          </div>
          <div className="lg:flex hidden gap-5 items-center">
            <Cart itemCount={itemCount} />
            <Likes />
            {isLoggedIn && (
              <Account username={username} onLogout={handleLogout} />
            )}
          </div>
        </div>
      </div>
      

      {isOpen && (
        <div className="lg:hidden flex flex-col py-16 gap-5 justify-start items-center w-full h-screen bg-gray-light">
          <Account username={username} onLogout={handleLogout} />

          <nav>
            <ul
              className={`flex flex-col gap-5`}
            >
              <li className="text-center">
                <Link  href="#" onClick={handleClose}>
                  Order tracking
                </Link>
              </li>
              <li className="text-center">
                <Link href="#" onClick={handleClose}>
                  Help
                </Link>
              </li>
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>
      )}
    </div>
  );
};

export default Header;
