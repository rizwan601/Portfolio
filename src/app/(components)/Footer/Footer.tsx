"use client";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { scrollTo } from "../utils/scroll";

const Footer: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setActiveLink(targetId);
      // Assuming you have the scrollTo function defined somewhere
      scrollTo(targetElement);
    }
  };
  return (
    <div className="bg-h-one">
      <div className="container mx-auto px-5 gap-y-7 py-16 flex justify-center">
        <ul className="flex flex-col md:flex-row gap-8 justify-center items-center cursor-pointer px-1 text-h-two font-bold text-lg">
          <li className="order-2 md:order-1">
            <a
              href="#about"
              onClick={handleClick}
              className={`hover:text-h-three active:text-h-three ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              About
            </a>
          </li>
          <li className="order-3 md:order-2">
            <a
              href="#services"
              onClick={handleClick}
              className={`hover:text-h-three active:text-h-three ${
                activeLink === "services" ? "active" : ""
              }`}
            >
              Services
            </a>
          </li>
          <li className="mx-10 order-1 md:order-3">
            <a
              href="#main"
              onClick={handleClick}
              className='activeLink === "main" ? "active" : ""'
            >
              <Image src="/footerLogo.png" alt="log" width={100} height={100} />
            </a>
          </li>
          <li className="order-4">
            <a
              href="#portfolio"
              onClick={handleClick}
              className={`hover:text-h-three active:text-h-three ${
                activeLink === "portfolio" ? "active" : ""
              }`}
            >
              Portfolio
            </a>
          </li>
          <li className="order-5">
            <a
              href="#blog"
              onClick={handleClick}
              className={`hover:text-h-three active:text-h-three ${
                activeLink === "blog" ? "active" : ""
              }`}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <h5 className="text-center font-normal text-h-two text-base">
        Follow me on social media:
      </h5>
      <div className="flex gap-7 justify-center pt-7 pb-12">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="25"
            height="25"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="25"
            height="25"
          >
            <path
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="25"
            height="25"
          >
            <path
              d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="25"
            height="25"
          >
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
