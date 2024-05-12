"use client";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { scrollTo } from "../utils/scroll";

const Navbar: React.FC = () => {
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
    <div id="main" className="bg-main-section">
      <div className="navbar container mx-auto bg-main-section">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-h-one lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  href="#about"
                  onClick={handleClick}
                  className={activeLink === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={handleClick}
                  className={activeLink === "services" ? "active" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={handleClick}
                  className={activeLink === "portfolio" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={handleClick}
                  className={activeLink === "blog" ? "active" : ""}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#main"
            onClick={handleClick}
            className={`btn btn-ghost text-xl ${
              activeLink === "main" ? "active" : ""
            }`}
          >
            <Image src="/logo.png" alt="log" width={100} height={100} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7 px-2 text-h-one font-bold text-lg">
            <li>
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
            <li>
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
            <li>
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
            <li>
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
        <div className="navbar-end">
          <a
            href="#contact"
            onClick={handleClick}
            className={`btn rounded-none bg-h-one text-h-two text-base py-[10px] ${
              activeLink === "blog" ? "active" : ""
            }`}
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
