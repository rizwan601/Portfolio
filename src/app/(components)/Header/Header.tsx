"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { scrollTo } from "../utils/scroll";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setActiveLink(targetId);
      scrollTo(targetElement);
    }
  };

  return (
    <div className="bg-main-section">
      <div className="hidden md:block absolute top-0 left-1/3">
        <Image
          src="/upper-semicircle.png"
          alt="person"
          layout="fixed"
          width={100}
          height={100}
        />
      </div>
      <div className="container mx-auto px-5 gap-4 grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="flex flex-col align-middle justify-center space-y-7 md:order-first py-9"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-normal text-h-one text-lg md:text-left text-center">
            UX Designer
          </h4>
          <h3 className="text-h-one text-5xl leading-10 font-bold md:text-left text-center">
            Hi There, I’m
          </h3>
          <h3 className="text-h-three text-5xl leading-10 font-bold md:text-left text-center">
            Sarah Jones
          </h3>
          <p className="font-normal text-h-one md:text-left text-center md:w-1/2 xs:1">
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </p>
          <div className="flex gap-x-5 justify-center md:justify-start">
            <a
              href="#contact"
              onClick={handleClick}
              className={`btn rounded-none bg-h-one text-h-two text-base py-[10px] ${
                activeLink === "blog" ? "active" : ""
              }`}
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              onClick={handleClick}
              className={`btn rounded-none bg-h-two hover:bg-h-two text-h-one text-base py-[10px] ${
                activeLink === "blog" ? "active" : ""
              }`}
            >
              Portfolio
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex align-middle order-first"
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src="/girlimg.png"
              alt="person"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
