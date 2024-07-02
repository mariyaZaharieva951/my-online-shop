"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="boxSmall w-full mx-auto flex lg:flex-row flex-col items-center justify-between py-[20px]">
        <p className="text-gray text-sm">Store © Copyright 2024, Inc. All rights reserved</p>
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
            <Link href="https://www.github.com" passHref>
              <FontAwesomeIcon
                icon={faGithub}
                size="20px"
                className="text-gray"
              />
            </Link>
          </div>
    </div>
  );
};

export default Footer;