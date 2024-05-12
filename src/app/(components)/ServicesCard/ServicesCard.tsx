"use client";
import React from "react";
import { motion } from "framer-motion";

interface ServiceData {
  imageSrc: string;
  heading: string;
  paragraph: string;
}

interface ServicesCardProps {
  serviceData: ServiceData;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ serviceData }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="lg:flex-1 w-full md:w-1/4"
    >
      <img src={serviceData.imageSrc} alt="Service" />
      <h3 className="text-h-one text-base font-bold my-3">
        {serviceData.heading}
      </h3>
      <p className="font-normal text-h-one">{serviceData.paragraph}</p>
    </motion.div>
  );
};

export default ServicesCard;
