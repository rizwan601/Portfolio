import React from "react";
import DesignInsightsCard from "../DesignInsightsCard/DesignInsightsCard";

interface DesignInsightsItem {
  s_heading: string;
  imageSrc: string;
  heading: string;
  paragraph: string;
  btn: JSX.Element;
}

const DesignInsights: React.FC = () => {
  // Define array of portfolio data
  const DesignInsightsData: DesignInsightsItem[] = [
    {
      s_heading: "August 15, 2023 / UX",
      imageSrc: "/typography.png",
      heading: "Typography Tips for Design Success",
      paragraph:
        "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
      btn: (
        <button className="btn btn-sm text-h-one font-bold text-xs mt-4 p-0 btn-ghost">
          Read More
          <img
            src="/arrow-right.png"
            alt="button-icon"
            width="16px"
            height="16px"
          />
        </button>
      ),
    },
    {
      s_heading: "August 15, 2023 / UX",
      imageSrc: "/colorPsychology.png",
      heading: "Color Psychology in UX",
      paragraph:
        "Explore how color choices impact user emotions and decision-making in UX design.",
      btn: (
        <button className="btn btn-sm text-h-one font-bold text-xs mt-4 p-0 btn-ghost">
          Read More
          <img
            src="/arrow-right.png"
            alt="button-icon"
            width="16px"
            height="16px"
          />
        </button>
      ),
    },
    {
      s_heading: "August 15, 2023 / UX",
      imageSrc: "/boostingUX.png",
      heading: "Boosting UX with Microinteractions",
      paragraph:
        "Discover the power of microinteractions in enhancing user experience and engagement.",
      btn: (
        <button className="btn btn-sm text-h-one font-bold text-xs mt-4 p-0 btn-ghost">
          Read More
          <img
            src="/arrow-right.png"
            alt="button-icon"
            width="16px"
            height="16px"
          />
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="bg-bg-section">
        <div className="container mx-auto px-5 gap-y-7 py-12 flex flex-col justify-center">
          <h2 className="text-3xl text-h-one font-bold text-center">
            Design Insights and Inspiration
          </h2>
          <div className="container mx-auto max-w-screen-lg">
            <p className="font-normal text-h-one text-center">
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </p>
          </div>
          {/* Render portfolio items with responsive layout */}
          <div className="overflow-x-hidden">
            <div className="flex flex-wrap justify-center items-center mt-2 -mx-9">
              {DesignInsightsData.map((designInsightsData, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-9 mb-6">
                  {/* Add "mb-6" to maintain vertical gap */}
                  <DesignInsightsCard designInsightsData={designInsightsData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignInsights;
