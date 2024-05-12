"use client";
import React from "react";
import { motion } from "framer-motion";

interface MyPortfolioData {
  imageSrc: string;
  heading: string;
  paragraph: string;
  arrowImageSrc: string;
}

interface MyPortfolioCardProps {
  myPortfolioData: MyPortfolioData;
}

const MyPortfolioCard: React.FC<MyPortfolioCardProps> = ({
  myPortfolioData,
}) => {
  return (
    <>
      <motion.div whileHover={{ scale: 0.9, transition: { duration: 0.2 } }}>
        <img
          src={myPortfolioData.imageSrc}
          alt="portfolio"
          className="w-full"
        />
        <h3 className="text-h-one text-base font-bold my-3">
          {myPortfolioData.heading}
        </h3>
        <div className="flex justify-between">
          <h3 className="font-normal text-h-one">
            {myPortfolioData.paragraph}
          </h3>
          <a href="#">
            <img
              className="-mt-4"
              src={myPortfolioData.arrowImageSrc}
              alt="arrow"
            />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default MyPortfolioCard;
