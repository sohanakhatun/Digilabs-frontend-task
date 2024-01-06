import React from "react";
import globe from "../assets/globe.svg";
import key from "../assets/key.svg";
import lock from "../assets/lock.svg";
const Cards = () => {
  const cardsArray = [
    {
      icon: globe,
      heading: "Globally Accepted",
      textcontent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      icon: key,
      heading: "Biometric Integrated",
      textcontent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      icon: lock,
      heading: "Fully Secured",
      textcontent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
  ];
  return (
    <div className="w-full h-full lg:-mt-60 mt-12 font-Inter font-medium flex flex-col justify-center items-center">
      <div className="w-[80rem]  flex flex-col flex-wrap py-2 justify-center items-center gap-0.5">
        <h1 className="mt-8 lg:text-4xl xxsm:text-2xl xxsm:w-[30%] text-center lg:w-full sm:w-[50%]">Elevating Card Programs with Cutting-Edge Technology</h1>
        <div className="flex flex-wrap">
          <div className="w-96 text-center text-gray-500 text-lg font-normal font-['Inter'] leading-7">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center text-[#582066]">
          <p>Compare all Pro features</p>
          {/* svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M4.66666 9.99996H16.3333M16.3333 9.99996L10.5 4.16663M16.3333 9.99996L10.5 15.8333"
              stroke="#582066"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* cards div */}
        <div className="flex lg:flex-row xxsm:flex-col gap-2 flex-wrap mt-12 justify-center ">
          {cardsArray.map((item) => (
            <div className="w-72 flex flex-col gap-4  justify-center items-center">
              <div className="rounded-full bg-[#F4EFF6] w-fit p-6">
                <img src={item.icon} alt="" />
              </div>
              <p>{item.heading}</p>
              <div className="text-[#5A6475] text-center">
                {item.textcontent}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
