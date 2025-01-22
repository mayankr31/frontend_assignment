import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import ShopDropDown from "./ShopDropDown";
import RewardsDropDown from "./RewardsDropDown";

export default function Header(props) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="h-[60px] border-b-[1px] border-b-[#44D62C] relative">
        <div className="h-full flex items-center px-3 mx-48">
          <img
            src="https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png"
            alt="logo  "
            className="h-7 w-12"
          />

          <div className="flex flex-1 justify-evenly items-center">
            <button
              className="p-5 text-[#BBBBBB]"
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={() => handleMouseLeave()}
              
            >
              Shop
            </button>

            <button
              className="p-5 text-[#BBBBBB]"
              onMouseEnter={() => handleMouseEnter("rewards")}
              onMouseLeave={() => handleMouseLeave()}
              
            >
              Rewards
            </button>

            <button className="p-5 text-[#BBBBBB]">Promotions</button>

            <div className="flex items-center space-x-2 bg-[#1D1D1D]  p-2">
              <IoMdSearch size={24} className="mr-1 ml-1" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search gold.razer.com"
                className="bg-[#1D1D1D] placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#44D62C] py-2 px-4 rounded-[3px] text-center text-black font-medium text-xs">
              LOG IN
            </button>

            <button className="flex gap-1 text-xs font-medium text-gray-200 items-center py-2 px-4 ml-2 bg-[#1D1D1D] rounded-[3px] border border-gray-400 ">
              <span>
                <MdLanguage size={18} />
              </span>
              IN
            </button>
          </div>
        </div>
        {activeDropdown && (
          <div
            className={`w-full bg-[#1D1D1D]  border-b-[1px] border-b-[#44D62C] z-50 absolute`}
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-48 px-3 py-2">
            {activeDropdown === "shop" && <ShopDropDown />}
            {activeDropdown === "rewards" && <RewardsDropDown />}
            </div>
          </div>
        )}
      </div>
    </>
  );
}


  
  