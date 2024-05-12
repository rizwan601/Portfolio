import React from "react";
interface designInsightsData {
  s_heading: string;
  imageSrc: string;
  heading: string;
  paragraph: string;
  btn: JSX.Element;
}

interface DesignInsightsCardProps {
  designInsightsData: designInsightsData;
}

const DesignInsightsCard: React.FC<DesignInsightsCardProps> = ({
  designInsightsData,
}) => {
  return (
    <>
      <img
        src={designInsightsData.imageSrc}
        alt="portfolio"
        className="w-full"
      />
      <h4 className="text-xs font-normal text-h-one mt-5">
        {designInsightsData.s_heading}
      </h4>
      <h3 className="text-h-one text-base font-bold my-3">
        {designInsightsData.heading}
      </h3>
      <div className="flex justify-between">
        <h3 className="font-normal text-h-one">
          {designInsightsData.paragraph}
        </h3>
      </div>
      <div>{designInsightsData.btn}</div>
    </>
  );
};

export default DesignInsightsCard;
