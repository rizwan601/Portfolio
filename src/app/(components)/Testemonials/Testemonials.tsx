import React from "react";
import TestemonialsSlider from "../TestemonialsSlider/TestemonialsSlider";
import Image from "next/image";

const Testemonials: React.FC = () => {
  return (
    <>
      <div className="bg-main-section flex flex-col justify-center items-center pb-3">
        <div className="flex items-center">
          <Image
            src="/upper-cemi-circle.png"
            alt="person"
            layout="responsive"
            width={100}
            height={100}
            className="min-w-[100px] min-h-[80px]"
          />
        </div>
        <h2 className="text-3xl text-h-one font-bold text-center my-8">
          Testemonials
        </h2>
        <div className="container mx-auto px-5 gap-4">
          <TestemonialsSlider />
        </div>
      </div>
    </>
  );
};

export default Testemonials;
