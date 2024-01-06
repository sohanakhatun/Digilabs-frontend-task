import React from "react";
import reviewdp from "../assets/Image.svg";
import stars from "../assets/Frame.svg";
const Reviews = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-12 font-Inter font-medium text-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="24"
          viewBox="0 0 98 24"
          fill="none"
        >
          <g clip-path="url(#clip0_2051_287)">
            <path
              d="M54.3049 0.359H60.3125L57.2893 23.681H51.2817L54.3049 0.359ZM46.7303 0.359L42.6762 13.794L40.9076 0.359H36.7056L31.397 13.754L30.7341 0.36H24.9105L26.938 23.682H31.7668L37.7374 8.932L39.8379 23.682H44.5928L52.4439 0.359H46.7303ZM97.1707 13.914H82.9062C82.9801 16.944 84.6572 18.937 87.1266 18.937C88.9886 18.937 90.4623 17.86 91.605 15.807L96.42 18.175C94.7651 21.702 91.2778 24 86.9796 24C81.119 24 77.2305 19.734 77.2305 12.877C77.2305 5.342 81.8004 0 88.2508 0C93.9275 0 97.5026 4.146 97.5026 10.605C97.5026 11.681 97.3917 12.757 97.1707 13.914ZM91.8269 9.448C91.8269 6.738 90.4253 5.023 88.1778 5.023C85.8554 5.023 83.9389 6.817 83.422 9.448H91.8269ZM6.13147 7.387L0 15.139H10.9501L12.1797 11.484H7.48868L10.3547 7.898L10.364 7.803L8.50011 4.332H16.8874L10.3862 23.682H14.835L22.6861 0.358H2.40377L6.1324 7.386L6.13147 7.387ZM70.0792 5.023C72.1983 5.023 74.0547 6.256 75.6773 8.369L76.5288 1.794C75.019 0.688 72.973 0 70.2642 0C64.8834 0 61.8602 3.409 61.8602 7.734C61.8602 10.734 63.4088 12.568 65.9521 13.754L67.1679 14.352C69.4349 15.399 70.0432 15.917 70.0432 17.023C70.0432 18.169 69.0207 18.897 67.4638 18.897C64.8917 18.907 62.8097 17.482 61.2435 15.05L60.3745 21.749C62.1597 23.22 64.447 24 67.4628 24C72.5773 24 75.7189 20.81 75.7189 16.385C75.7189 13.375 74.4846 11.442 71.3699 9.927L70.0432 9.249C68.1997 8.362 67.5738 7.874 67.5738 6.897C67.5738 5.841 68.4308 5.023 70.0792 5.023Z"
              fill="#163300"
            />
          </g>
          <defs>
            <clipPath id="clip0_2051_287">
              <rect width="98" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="w-[80%]">
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It's refreshing to see such innovation in
        the financial industry.
      </div>
      <div>
        <img src={reviewdp} />
      </div>
      <p className="text-2xl">Nick Babich</p>
      <p className="text-[#5A6475]">Lead Designer</p>
      <div className="flex flex-row gap-2">
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
        <img src={stars} alt="" />
      </div>
      <div className="mt-6 text-3xl ">
        Unlock Limitless Possibilities with Our New Card Solutions
      </div>
      <div className="flex sm:flex-row xxsm:flex-col gap-4">
        <div className="flex flex-row  gap-2 p-4 bg-[#582066] rounded-md text-white items-center justify-center">
          <p>Unlock your card</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_2051_715)">
              <path
                d="M0.833344 8.33331H19.1667M2.50001 3.33331H17.5C18.4205 3.33331 19.1667 4.07951 19.1667 4.99998V15C19.1667 15.9205 18.4205 16.6666 17.5 16.6666H2.50001C1.57954 16.6666 0.833344 15.9205 0.833344 15V4.99998C0.833344 4.07951 1.57954 3.33331 2.50001 3.33331Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2051_715">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="bg-[#EEEFEF] rounded-md p-4 flex flex-row gap-2 justify-center items-center">
          <p className="text-[#5A6475]">Customer support</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2.5 15V10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10V15M17.5 15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H15C14.558 17.5 14.134 17.3244 13.8215 17.0118C13.5089 16.6993 13.3333 16.2754 13.3333 15.8333V13.3333C13.3333 12.8913 13.5089 12.4674 13.8215 12.1548C14.134 11.8423 14.558 11.6667 15 11.6667H17.5V15.8333ZM2.5 15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H5C5.44203 17.5 5.86595 17.3244 6.17851 17.0118C6.49107 16.6993 6.66667 16.2754 6.66667 15.8333V13.3333C6.66667 12.8913 6.49107 12.4674 6.17851 12.1548C5.86595 11.8423 5.44203 11.6667 5 11.6667H2.5V15.8333Z"
              stroke="#5A6475"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        
      </div>
    </div>
  );
};

export default Reviews;
