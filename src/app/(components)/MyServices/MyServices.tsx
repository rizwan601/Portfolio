import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const MyServices: React.FC = () => {
  // Define array of service data
  const servicesData = [
    {
      imageSrc: "/designIcon.png",
      heading: "Design",
      paragraph:
        "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
    },
    {
      imageSrc: "/branding.png",
      heading: "Branding",
      paragraph:
        "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
    },
    {
      imageSrc: "research.png",
      heading: "UX Research",
      paragraph:
        "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
    },
    {
      imageSrc: "/testing.png",
      heading: "Usability Testing",
      paragraph:
        "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
    },
  ];

  return (
    <div id="services" className="bg-h-two">
      <div className="container mx-auto px-5 gap-7 py-12 flex flex-col justify-center">
        <h2 className="text-3xl text-h-one font-bold text-center">Services</h2>
        <div className="container mx-auto max-w-screen-lg">
          <p className="font-normal text-h-one text-center">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        {/* Iterate over servicesData and render a ServicesCard for each service */}
        <div className="flex flex-wrap justify-center gap-8 mt-2">
          {servicesData.map((service, index) => (
            <ServicesCard key={index} serviceData={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
