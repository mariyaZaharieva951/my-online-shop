"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import LanguageSwitcher from "@/components/layouts/LanguageSwitcher";
import Search from "@/components/layouts/Search";
import Likes from "@/components/layouts/Likes";
import Cart from "@/components/layouts/Cart";
import Account from "@/components/layouts/Account";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = "Ivan Todorov";

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  const itemCount = 5;

  return (
    <div className="container mx-auto mt-3">
      <div className="flex justify-between font-rubik ">
        <div className="flex gap-3">
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
        <div className="flex gap-3">
          <div className="text-gray text-base">Order traking</div>
          <div className="text-gray text-base">Help</div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-[28px] font-bold">STORE</div>
        <div>
          <Search />
        </div>
        <div className="flex gap-5 items-center">
          <Cart itemCount={itemCount} />
          <Likes />
          {isLoggedIn && (
            <Account username={username} onLogout={handleLogout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
