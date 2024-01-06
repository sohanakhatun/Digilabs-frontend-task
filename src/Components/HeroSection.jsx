import React from "react";
import bgMesh from "../assets/Mesh.svg";
const HeroSection = () => {
  return (
    <div className="flex flex-col w-full gap-2 h-fit">
      <div className="w-10/12 mt-48 lg:ml-[28%] md:ml-[20%] sm:ml-[10%] relative mx-auto flex flex-col flex-wrap justify-center">
        <div className="-mt-64 ">
          <img src={bgMesh} alt="" className="absolute w-fit" />
          <p className=" font-Inter font-medium text-[#582066] absolute mt-4 sm:ml-48 xsm:ml-[30%] xxsm:ml-20">
            Seamless experience
          </p>
          <div className="absolute self-stretch sm:w-[28rem] xsm:w-[24rem] mt-12  sm:ml-12 xxsm:ml-2 xsm:ml-[-4px] ssm:ml-6 text-center text-neutral-900 sm:text-5xl xsm:text-[40px] xxsm:text-3xl font-medium font-Inter leading-12">
            Unleashing the Next Generation of Card Solutions
          </div>
          <div className="absolute sm:mt-52 ssm:mt-44 xxsm:mt-40 sm:ml-6 sm:w-[32rem] xsm:w-[25rem] ssm:w-[25rem] ssm:ml-[5%] text-center text-gray-500 sm:text-lg  font-normal font-['Inter'] sm:leading-7 xxsm:leading-6">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
          <div className="absolute sm:mt-80  sm:ml-44 w-48 h-10 justify-center items-center inline-flex xxsm:ml-[72px] ssm:ml-36 xxsm:mt-64">
            <div className="p-3 bg-fuchsia-900 rounded-lg justify-center items-center gap-2 flex cursor-pointer">
              <div className="text-center text-white text-base font-medium font-['Inter'] leading-tight">
                Unlock your Card
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M4.66666 10.0001H16.3333M16.3333 10.0001L10.5 4.16675M16.3333 10.0001L10.5 15.8334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-fit font-Inter font-medium text-[#5A6475]  mt-44 ssm:mt-60 sm:mt-64  md:ml-[45%] lg:ml-[42%] sm:ml-[40%]  ssm:ml-48 xxsm:ml-[25%] xsm:ml-[35%]">
        <p> *No credit card required</p>
      </div>
    
    </div>
  );
};

export default HeroSection;
