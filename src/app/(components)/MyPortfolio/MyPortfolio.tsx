import React from "react";
import MyPortfolioCard from "../MyPortfolioCard/MyPortfolioCard";

const MyPortfolio: React.FC = () => {
  // Define array of portfolio data
  const MyPortfolioData = [
    {
      imageSrc: "/educational.png",
      heading: "Educational Platform",
      paragraph: "Web Design / Usability Testing",
      arrowImageSrc: "/sendBtn.png",
    },
    {
      imageSrc: "/travel.png",  
      heading: "Travel App Design",
      paragraph: "UX Research / App Design",
      arrowImageSrc: "/sendBtn.png",
    },
    {
      imageSrc: "/personal.png",
      heading: "Personal Page",
      paragraph: "Web Design",
      arrowImageSrc: "/sendBtn.png",
    },
    {
      imageSrc: "/furniture.png",
      heading: "Furniture Mobile App",
      paragraph: "App Design",
      arrowImageSrc: "/sendBtn.png",
    },
    {
      imageSrc: "/coffee.png",
      heading: "Coffee House Landing Page",
      paragraph: "UX Research / Web Design",
      arrowImageSrc: "/sendBtn.png",  
    },
    {
      imageSrc: "/home.png",
      heading: "Home Services Page",
      paragraph: "Web Design / Marketing",
      arrowImageSrc: "/sendBtn.png",
    },
  ];

  return (
    <>
      <div id="portfolio" className="bg-main-section min-h-96 sm:min-h-80">
        <div className="container mx-auto px-5 gap-y-7 py-12 flex flex-col justify-center">
          <h2 className="text-3xl text-h-one font-bold text-center">
            My Portfolio
          </h2>
          <div className="container mx-auto max-w-screen-lg">
            <p className="font-normal text-h-one text-center">
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </p>
          </div>
          {/* Render portfolio items with responsive layout */}
        </div>
      </div>
      <div className="bg-bg-section">
        <div className="container mx-auto px-5 gap-y-7 flex flex-col relative -top-32 justify-center">
          <div className="overflow-x-hidden">
            <div className="flex flex-wrap justify-center items-center mt-2 -mx-9">
              {MyPortfolioData.map((portfolioData, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-9 mb-6">
                  {/* Add "mb-6" to maintain vertical gap */}
                  <MyPortfolioCard myPortfolioData={portfolioData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
