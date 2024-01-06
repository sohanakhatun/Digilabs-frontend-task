import React from "react";
import img from "../assets/Scene 3-2 _ Matte (1) 1.png";
import rect from "../assets/Rectangle 31.png";
const CardsSecond = () => {
  return (
    <div className="w-full h-full lg:-mt-32 -mt-36 font-Inter font-medium flex flex-col justify-center items-center">
      <div className="w-[80rem] mt-64 flex flex-col flex-wrap py-2 justify-center items-center gap-0.5">
        <h1 className=" mt-8 lg:text-4xl xxsm:text-2xl xxsm:w-[30%] text-center lg:w-full sm:w-[50%]">Elevating Card Programs with Cutting-Edge Technology</h1>
        <div className="flex flex-wrap">
          <div className="w-96 text-center text-gray-500 text-lg font-normal font-['Inter'] leading-7  lg:w-full ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>

        <div className="flex flex-row gap-2 mt-4 items-center text-[#582066]">
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
        <div className="flex flex-col  lg:flex-row lg:gap-6 lg:mt-20 xxsm:mt-64 justify-center items-center w-11/12 px-24  h-96 ">
          <div className="relative w-[50%]  h-96  px-20 py-28 bg-slate-50 rounded-lg justify-center items-center flex xxsm:mt-20">
            <div className=" mt-[-90%] -ml-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="55"
                viewBox="0 0 59 55"
                fill="none"
              >
                <path
                  d="M33 0C33 0 34.4346 13.3898 40.0224 18.9776C45.6102 24.5654 59 26 59 26C59 26 45.6102 27.4346 40.0224 33.0224C34.4346 38.6102 33 52 33 52C33 52 31.5654 38.6102 25.9776 33.0224C20.3898 27.4346 7 26 7 26C7 26 20.3898 24.5654 25.9776 18.9776C31.5654 13.3898 33 0 33 0Z"
                  fill="url(#paint0_linear_2051_1151)"
                />
                <path
                  d="M12 28C12 28 12.6621 34.1799 15.2411 36.7589C17.8201 39.3379 24 40 24 40C24 40 17.8201 40.6621 15.2411 43.2411C12.6621 45.8201 12 52 12 52C12 52 11.3379 45.8201 8.75891 43.2411C6.17992 40.6621 0 40 0 40C0 40 6.17992 39.3379 8.75891 36.7589C11.3379 34.1799 12 28 12 28Z"
                  fill="url(#paint1_linear_2051_1151)"
                />
                <path
                  d="M22 43C22 43 22.3311 46.09 23.6205 47.3795C24.91 48.6689 28 49 28 49C28 49 24.91 49.3311 23.6205 50.6205C22.3311 51.91 22 55 22 55C22 55 21.6689 51.91 20.3795 50.6205C19.09 49.3311 16 49 16 49C16 49 19.09 48.6689 20.3795 47.3795C21.6689 46.09 22 43 22 43Z"
                  fill="url(#paint2_linear_2051_1151)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2051_1151"
                    x1="33"
                    y1="0"
                    x2="33"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#814BF4" />
                    <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2051_1151"
                    x1="12"
                    y1="28"
                    x2="12"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#814BF4" />
                    <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2051_1151"
                    x1="22"
                    y1="43"
                    x2="22"
                    y2="55"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#814BF4" />
                    <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <img
              className="absolute z-10 w-4 h-40 rod origin-top-left rotate-[-35.89deg] rounded-lg shadow-inner -mt-[12%] ml-[-59%]  items-center"
              src={rect}
            />
            <div className="rod2 absolute z-30 w-4 h-10 origin-top-left rotate-[-35.89deg] bg-purple-950 rounded-bl-lg rounded-br-lg  -ml-[26.524%] mt-[9%] " />
            <div className="flex justify-center items-center ml-44 mt-32">
              <img src={img} className="absolute object-contain h-64 mt-[] " />
            </div>
          </div>

          <div className="w-[50%]  h-96 lg:mt-20 px-20 py-28 bg-slate-50 rounded-lg justify-center items-center inline-flex xxsm:mt-32 ">
            <div className="relative -mt-72 w-[400px]">
              <div className="absolute z-10 ml-[-32px] -mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="55"
                  viewBox="0 0 59 55"
                  fill="none"
                >
                  <path
                    d="M33 0C33 0 34.4346 13.3898 40.0224 18.9776C45.6102 24.5654 59 26 59 26C59 26 45.6102 27.4346 40.0224 33.0224C34.4346 38.6102 33 52 33 52C33 52 31.5654 38.6102 25.9776 33.0224C20.3898 27.4346 7 26 7 26C7 26 20.3898 24.5654 25.9776 18.9776C31.5654 13.3898 33 0 33 0Z"
                    fill="url(#paint0_linear_2051_1202)"
                  />
                  <path
                    d="M12 28C12 28 12.6621 34.1799 15.2411 36.7589C17.8201 39.3379 24 40 24 40C24 40 17.8201 40.6621 15.2411 43.2411C12.6621 45.8201 12 52 12 52C12 52 11.3379 45.8201 8.75891 43.2411C6.17992 40.6621 0 40 0 40C0 40 6.17992 39.3379 8.75891 36.7589C11.3379 34.1799 12 28 12 28Z"
                    fill="url(#paint1_linear_2051_1202)"
                  />
                  <path
                    d="M22 43C22 43 22.3311 46.09 23.6205 47.3795C24.91 48.6689 28 49 28 49C28 49 24.91 49.3311 23.6205 50.6205C22.3311 51.91 22 55 22 55C22 55 21.6689 51.91 20.3795 50.6205C19.09 49.3311 16 49 16 49C16 49 19.09 48.6689 20.3795 47.3795C21.6689 46.09 22 43 22 43Z"
                    fill="url(#paint2_linear_2051_1202)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2051_1202"
                      x1="33"
                      y1="0"
                      x2="33"
                      y2="52"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#814BF4" />
                      <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2051_1202"
                      x1="12"
                      y1="28"
                      x2="12"
                      y2="52"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#814BF4" />
                      <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2051_1202"
                      x1="22"
                      y1="43"
                      x2="22"
                      y2="55"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#814BF4" />
                      <stop offset="1" stop-color="#8E5CF7" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute flex flex-col p-4  font-Inter font-medium w-96 h-64 rounded-lg bg-white border-[#C598FF] border-[1px]">
                <div className="flex flex-row justify-between">
                  <h3>Spending</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2051_1173)">
                      <path
                        d="M13.2163 4.21436H16.4623V7.46039"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.5933 9.0834L16.4623 4.21436"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.72422 17.1984H3.47819V13.9524"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.47819 17.1984L8.34724 12.3293"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2163 17.1984H16.4623V13.9524"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.5933 12.3293L16.4623 17.1984"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.72422 4.21436H3.47819V7.46039"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.47819 4.21436L8.34724 9.0834"
                        stroke="#2C3E50"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2051_1173">
                        <rect
                          width="19.4762"
                          height="19.4762"
                          fill="white"
                          transform="translate(0.232147 0.968262)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-row gap-2 items-center mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2051_1166)">
                      <path
                        d="M3.4028 7.3293C3.4028 6.68362 3.6593 6.06439 4.11586 5.60783C4.57242 5.15127 5.19165 4.89478 5.83733 4.89478H15.5754C16.2211 4.89478 16.8403 5.15127 17.2969 5.60783C17.7535 6.06439 18.0099 6.68362 18.0099 7.3293V13.8214C18.0099 14.467 17.7535 15.0863 17.2969 15.5428C16.8403 15.9994 16.2211 16.2559 15.5754 16.2559H5.83733C5.19165 16.2559 4.57242 15.9994 4.11586 15.5428C3.6593 15.0863 3.4028 14.467 3.4028 13.8214V7.3293Z"
                        stroke="#5A6475"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.4028 8.95227H18.0099"
                        stroke="#5A6475"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.64883 13.0098H6.65768"
                        stroke="#5A6475"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.89487 13.0098H11.5179"
                        stroke="#5A6475"
                        stroke-width="1.21726"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2051_1166">
                        <rect
                          width="19.4762"
                          height="19.4762"
                          fill="white"
                          transform="translate(0.968262 0.83728)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#5A6475]">9349 visa card</p>
                </div>
                <div className="flex flex-row gap-2 items-baseline mt-3">
                  <h2 className="mb-4 text-3xl font-semibold text-[#121417]">
                    127.14
                  </h2>
                  <p className="text-[13px] text-[#121417]">USD</p>
                </div>
                <div className="text-[#5A6475] text-sm flex flex-row gap-2">
                  <p>vs last week</p>
                  <p>Last Purchased ( Feb 24 19:59 UTC-5 )</p>
                </div>
                <div className="flex flex-row justify-evenly text-[#5A6475] mt-4">
                  <p>400 USD</p>
                  <p>1000 USD</p>
                  <p>5000 USD</p>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                  <div className=" border-[7px] w-24 rounded-l-lg border-[#582066]"></div>
                  <div className=" border-[7px] w-24  border-[#582066]"></div>
                  <div className=" border-[7px] w-24  border-[#EFE4F2]"></div>
                  <div className=" border-[7px] w-24 rounded-r-lg border-[#EFE4F2]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSecond;
