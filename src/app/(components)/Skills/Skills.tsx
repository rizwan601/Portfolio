import React from "react";

const Skills: React.FC = () => {
  return (
    <>
      <div className="bg-bg-section min-h-96 sm:min-h-80 -mt-10">
        <div className="container mx-auto px-5 gap-y-7 py-12 flex flex-col justify-center">
          <h2 className="text-3xl text-h-one font-bold text-center">
            Core Design Skills
          </h2>
          <div className="container mx-auto max-w-screen-lg">
            <p className="font-normal text-h-one text-center">
              I excel in essential design skills, creating visually stunning and
              functional digital experiences. From UI design to UX research, my
              passion is to craft effective and memorable digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-x-4">
            <div className="w-full md:w-[40%]">
              <label className="block">
                <span className="block text-h-one font-bold text-base">
                  Interaction Design
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[60%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      60%
                    </p>
                  </div>
                </div>
              </label>
              <label className="py-8 block">
                <span className="block text-h-one font-bold text-base">
                  Figma
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[95%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      95%
                    </p>
                  </div>
                </div>
              </label>
              <label className="block">
                <span className="block text-h-one font-bold text-base">
                  Usability Testing
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[70%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      70%
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div className="w-full mt-8 md:mt-0 md:w-[40%]">
              <label className="block">
                <span className="block text-h-one font-bold text-base">
                  Prototyping
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[80%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      80%
                    </p>
                  </div>
                </div>
              </label>
              <label className="py-8 block">
                <span className="block text-h-one font-bold text-base">
                  User Research
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[45%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      45%
                    </p>
                  </div>
                </div>
              </label>
              <label className="block">
                <span className="block text-h-one font-bold text-base">
                  Information Architecture
                </span>
                <div className="relative w-full bg-progress-bg rounded-full h-2.5">
                  <div className="absolute inset-0 flex justify-between items-center">
                    <div className="bg-h-one h-2.5 rounded-full w-[50%]"></div>
                    <p className="text-h-one font-bold text-base md:-mr-11">
                      50%
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
